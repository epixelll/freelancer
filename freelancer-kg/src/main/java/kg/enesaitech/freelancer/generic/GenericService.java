package kg.enesaitech.freelancer.generic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kg.enesaitech.freelancer.vo.SearchParameters;
import kg.enesaitech.freelancer.vo.SearchResult;

@Service
public class GenericService <E extends AbstractEntity, EHome extends GenericHome<E>>{

	@Autowired
	@Qualifier("GenericHome")
	protected EHome eHome;
	
	@Transactional
	public Integer create(E transientInstance) {
		System.out.println("asdf");
		return eHome.persist(transientInstance);
	}

	@Transactional
	public void delete(final Class<E> type, int id) {
		E e = eHome.findById(type, id);
		eHome.remove(e);
	}

	@Transactional
	public E update(E detachedInstance) {
		return eHome.merge(detachedInstance);
	}

	@Transactional
	public E get(final Class<E> type, Integer id) {
		return eHome.findById(type, id);
	}

	@Transactional
	public SearchResult<E> getList(SearchParameters searchParameters, Class<E> class_type) {
		return eHome.getList(searchParameters, class_type);
	}
	
}
