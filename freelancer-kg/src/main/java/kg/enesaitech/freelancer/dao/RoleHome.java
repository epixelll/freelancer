package kg.enesaitech.freelancer.dao;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import kg.enesaitech.freelancer.entity.Role;
import kg.enesaitech.freelancer.generic.GenericHome;

@Repository
public class RoleHome extends GenericHome<Role>{

	private static final Log log = LogFactory.getLog(RoleHome.class);

	@PersistenceContext
	private EntityManager entityManager;
	
	//This method is created to be used by shiro realm
	public Set<String> getNameSetByUserName(String username) {
		Set<String> roleNames = null;
		try {
			Query query = entityManager.createQuery(" SELECT r.name FROM Role r LEFT JOIN r.users u WHERE u.username = :username");
			query.setParameter("username", username);
			roleNames = new HashSet(query.getResultList());
		} catch (RuntimeException re) {
			log.error("getListByUsername Error", re);
		}
		return roleNames;
	}

}
