package kg.enesaitech.freelancer.generic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import kg.enesaitech.freelancer.other.RequestComparisonType;
import kg.enesaitech.freelancer.vo.SearchParamWithType;
import kg.enesaitech.freelancer.vo.SearchParameters;
import kg.enesaitech.freelancer.vo.SearchResult;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.GenericTypeResolver;
import org.springframework.stereotype.Repository;

@Repository("GenericHome")
public class GenericHome <E extends AbstractEntity>{
	
	private final Class<E> clazz;
	
	public GenericHome() {
		this.clazz = (Class<E>) GenericTypeResolver.resolveTypeArgument(getClass(), GenericHome.class);
    }

	protected static final Log log = LogFactory.getLog(GenericHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public Integer persist(E transientInstance) {
		Integer entityId = null;
		log.debug("persisting "+ clazz +" instance");
		try {
			entityManager.persist(transientInstance);
			entityManager.flush();
			entityId = transientInstance.getId();
			log.debug("persist successful");
			return entityId;
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(E persistentInstance) {
		log.debug("removing "+ clazz +" instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public E merge(E detachedInstance) {
		log.debug("merging "+ clazz +" instance");
		try {
			E result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public E findById(final Class<E> type, Integer id) {
		log.debug("getting "+ clazz +" instance with id: " + id);
		try {
			E instance = entityManager.find(type, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
	
	
	public SearchResult<E> getList(SearchParameters searchParameters, Class<E> class_type) {
		log.debug("getting list "+ clazz +"  ");
		try {
			SearchResult<E> searchResult = new SearchResult<E>();
			
			// Query setups
			CriteriaBuilder builder = entityManager.getCriteriaBuilder();
			CriteriaQuery<E> cQuery = builder.createQuery(class_type);
			CriteriaQuery<Long> cQueryCount = builder.createQuery(Long.class);
			Root<E> entity = cQuery.from(class_type);
			
			// Query Select Part
			cQuery.select(entity);
			cQueryCount.select(builder.count(cQueryCount.from(class_type)));
			
			// Predicate preperation
			Predicate[] predicatesArray = searchParameters.getSearchParameters() != null ? preparePredicate(builder, entity, searchParameters.getSearchParameters()) : new Predicate[0];
			//this predicates are prepared with concern of comparison operator
			Predicate[] predicatesArrayWithOperation = searchParameters.getSearchParamWithTypes() != null ? preparePredicateWithType(builder, entity, searchParameters.getSearchParamWithTypes()) : new Predicate[0];
			predicatesArray = ArrayUtils.addAll(predicatesArray,predicatesArrayWithOperation);

			// Setting where clause
			// entitiyManager.createQuery is called there because we used other Root element. 
			// And this call will set generated alias as it and new query will add its alias in a new manner
			entityManager.createQuery(cQueryCount);
			cQueryCount.where(predicatesArray);
			cQuery.where(predicatesArray);

			// Count. Getting total record 
			Long count = entityManager.createQuery(cQueryCount).getSingleResult();

			// Order Parameter Set
			if(searchParameters.getOrderParamDesc() != null)
				setOrderParams(cQuery, builder, searchParameters.getOrderParamDesc(), entity);
			
			// query Request List
			TypedQuery<E> typedQuery = entityManager.createQuery(cQuery);
			typedQuery.setFirstResult(searchParameters.getStartIndex() != null ? searchParameters.getStartIndex() : 0);
			typedQuery.setMaxResults(searchParameters.getResultQuantity() != null ? searchParameters.getResultQuantity() : 100000);
			
			// Building up searchResult
			List<E> resultList = typedQuery.getResultList();
			searchResult.setResultList(resultList);
			searchResult.setTotalRecords(count.intValue());
			
			log.debug("list successful");
			return searchResult;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
	

	
	
	protected Predicate[] preparePredicate(CriteriaBuilder builder, Root<E> entity, Map<String, String> searchParams){
		List<Predicate> predicates = new ArrayList<Predicate>();
		for (Map.Entry<String, String> entry : searchParams.entrySet()) {
		    String key = entry.getKey();
		    String value = entry.getValue();
		    
		    Path<E> path = getEntityPath(entity, key);
		    
		    if(key != null && value != null && path != null){
		    	if(isNumeric(value))
		    		predicates.add(builder.equal(path, Integer.valueOf(value)));
		    	else if(isBoolean(value))
		    		predicates.add(builder.equal(path, Boolean.valueOf(value)));
		    	else 
		    		predicates.add(builder.like(getEntityPathAsString(entity, key), "%"+ value + "%"));
		    }
		}
		return predicates.toArray(new Predicate[]{});
	}
	

	protected Predicate[] preparePredicateWithType(CriteriaBuilder builder, Root<E> entity, List<SearchParamWithType> searchParamWithTypes){
		List<Predicate> predicates = new ArrayList<Predicate>();
		for (SearchParamWithType searchParamWithType: searchParamWithTypes) {
		    String field = searchParamWithType.getSearchField();
		    String value = searchParamWithType.getSearchValue();
		    RequestComparisonType fieldType = searchParamWithType.getSearchType();
		    
		    Path<E> path = getEntityPath(entity, field);
		    
		    if(searchParamWithType.getSearchField() != null && searchParamWithType.getSearchValue() != null && path != null){
		    	
		    		switch (fieldType) {
					case EQUAL:
						if(isNumeric(value))
							predicates.add(builder.equal(path, Double.valueOf(value)));
						else if(isBoolean(value))
				    		predicates.add(builder.equal(path, Boolean.valueOf(value)));
						break;
					case NOT_EQUAL:
						if(isNumeric(value))
							predicates.add(builder.notEqual(path, Double.valueOf(value)));
						else if(isBoolean(value))
							predicates.add(builder.notEqual(path, Double.valueOf(value)));
						break;
//					case GREATER_THAN:
//						predicates.add(builder.gt(Double.valueOf(path), Double.valueOf(value)));
//						break;
//					case GRAETER_OR_EQUAL:
//						predicates.add(builder.ge(path, Integer.valueOf(value)));
//						break;
//					case LESS_THAN:
//						predicates.add(builder.lt(path, Integer.valueOf(value)));
//						break;
//					case LESS_THAN_OR_EQUAL:
//						predicates.add(builder.le(path, Integer.valueOf(value)));
//						break;
//					case BETWEEN:
//						predicates.add(builder.between(path, Date.valueOf(value)));
//						break;
					case LIKE:
						predicates.add(builder.like(getEntityPathAsString(entity, value), "%"+ value + "%"));
						break;
					default:
						predicates.add(builder.equal(path, Integer.valueOf(value)));
						break;
					}		    		
		    }
		}
		return predicates.toArray(new Predicate[]{});
	}
	
	protected void setOrderParams(CriteriaQuery<E> select, CriteriaBuilder builder, Map<String, Boolean> orderParamDesc, Root<E> entity){
		for (Map.Entry<String, Boolean> entry : orderParamDesc.entrySet()) {
			String key = entry.getKey();
		    Boolean value = entry.getValue();
		    
		    Path<E> path = getEntityPath(entity, key);
		    
		    if(key != null && value != null && path != null){
				if(value) select.orderBy(builder.desc(path));
				else select.orderBy(builder.asc(path));
		    }
		}
	}
	
	protected Path<E> getEntityPath(Root<E> entity, String key) {
		
		List<String> pathStringList = Arrays.asList(key.split("\\."));
		
		try{
			Path<E> path = entity.get(pathStringList.get(0));
			for(int i = 1; i <= pathStringList.size()-1; i++){
				try{
					path = path.get(pathStringList.get(i));
			    }catch(Exception e){
			        return null;
			    }
			}
			return path;
	    }catch(Exception e){
	        return null;
	    }
	}
	
	protected Path<String> getEntityPathAsString(Root<E> entity, String key) {
		
		List<String> pathStringList = Arrays.asList(key.split("\\."));
		Path<String> path = null;
		
		try{
			for(int i = 0; i <= pathStringList.size()-1; i++){
				if(i == 0 && pathStringList.size() <= 1){
					path = entity.<String>get(pathStringList.get(i));
				}else if(i==0){
					path = entity.get(pathStringList.get(i));
				}else if(pathStringList.size()-1 == i){
					path = path.<String>get(pathStringList.get(i));
				}else{
					path = path.get(pathStringList.get(i));
				}
			}
	    }catch(Exception e){
	        path = null;
	    }
		return path;
		
	}

	public static boolean isNumeric(String str)
	{
	  return str.matches("-?\\d+(\\.\\d+)?");  //match a number with optional '-' and decimal.
	}
	
	public static boolean isBoolean(String str)
	{
	  return str == "true" || str == "false";
	}
}
