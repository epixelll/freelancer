package kg.enesaitech.freelancer.generic;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;

import kg.enesaitech.freelancer.vo.SearchParameters;
import kg.enesaitech.freelancer.vo.SearchResult;


public class GenericWS<E extends AbstractEntity, VO extends AbstractVO> {
	
	private final Class<E> e_clazz;
	private final Class<VO> vo_clazz;
	
	public GenericWS(Class<E> e_clazz, Class<VO> vo_clazz) {
		this.e_clazz = e_clazz;
		this.vo_clazz = vo_clazz;
    }
	
	@Autowired
	protected DozerBeanMapper mapper;
//	protected Mapper mapper = DozerMapperProvider.getMapper();
	protected static final Logger log = Logger.getLogger("");
	
	@Autowired
	protected GenericService<E, GenericHome<E>> genericService;
//	GenericService<E> genericService;

	@POST
	@Path("/create")
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(VO vo) {
		E e = mapper.map(vo, e_clazz);
		
		genericService.create(e);
		
		return Response.ok().build();
	}

	@POST
	@Path("/update/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(VO vo, @PathParam("id") int id) {
				
		E e2 = genericService.get(e_clazz, id);
		
		if(e2 == null || e2.getId() == null || (vo.getId() != null && e2.getId() != vo.getId()))
			log.error("Id sent in object doesn't match path id!!!");
		
		E e = mapper.map(vo, e_clazz);
		genericService.update(e);
		return Response.ok().build();
	}
	

	@GET
	@Path("/delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") int id) {
				
		genericService.delete(e_clazz, id);
		
		return Response.ok().build();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public VO get(@PathParam("id") int id) {
		
		E e = genericService.get(e_clazz, id);
		
		VO vo = mapper.map(e, vo_clazz);
		
		return vo;
	}
	
	
	@POST
	@Path("/list")
	@Produces(MediaType.APPLICATION_JSON)
	public SearchResult<VO> search(SearchParameters searchParameters) {

		if(searchParameters == null) searchParameters = new SearchParameters();
		SearchResult<E> searchResult = genericService.getList(searchParameters, e_clazz);
		
		SearchResult<VO> searchResultVO = new SearchResult<VO>();
		
		mapper.map(searchResult.getResultList(), searchResultVO.getResultList());
		searchResultVO.setTotalRecords(searchResult.getTotalRecords());

		return searchResultVO;

	}
	
	

}
