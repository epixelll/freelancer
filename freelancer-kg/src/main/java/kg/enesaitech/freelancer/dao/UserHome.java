package kg.enesaitech.freelancer.dao;

// Generated Apr 8, 2015 5:05:13 PM by Hibernate Tools 3.4.0.CR1

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import kg.enesaitech.freelancer.entity.User;
import kg.enesaitech.freelancer.generic.GenericHome;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

/**
 * Home object for domain model class Users.
 * @see kg.NSI_Tech.home.UsersVO
 * @author Hibernate Tools
 */

@Repository
public class UserHome extends GenericHome<User>{

	private static final Log log = LogFactory.getLog(UserHome.class);

	@PersistenceContext
	private EntityManager entityManager;
	
	
	//This method is created to be used by shiro realm
	public User getByUserName(String string) {
		User user = null;
		
		try {				
			Query query = entityManager.createQuery("from User where username = :name");
			query.setParameter("name", string);
			user = (User) query.getSingleResult();
		} catch (RuntimeException re) {
			log.error("list error", re);
			System.out.println(re);
		}
		
		return user;
	}
	
	
	//This method is created to be used by shiro realm
	public User getByUsersRole(String string) {
		User user = null;
		try {
			Query query = entityManager.createQuery("select u From User u left join u.role r where r.name = :name");
			query.setParameter("name", string);
			user = (User) query.getResultList().get(0);
		} catch (RuntimeException re) {
			log.error("get BY UsersRole Error", re);
		}
		
		return user;
	}
	
}
