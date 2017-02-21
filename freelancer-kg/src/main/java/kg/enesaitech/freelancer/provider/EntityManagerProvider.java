package kg.enesaitech.freelancer.provider;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class EntityManagerProvider {
	private static EntityManagerFactory factory = Persistence.createEntityManagerFactory("freelancer-kg");
	
	public static EntityManager getEntityManager(){
		return factory.createEntityManager();
	}
}
