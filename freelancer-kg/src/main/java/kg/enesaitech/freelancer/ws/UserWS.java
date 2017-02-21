package kg.enesaitech.freelancer.ws;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import kg.enesaitech.freelancer.entity.User;
import kg.enesaitech.freelancer.generic.GenericHome;
import kg.enesaitech.freelancer.generic.GenericService;
import kg.enesaitech.freelancer.service.UserService;
import kg.enesaitech.freelancer.vo.SearchParameters;
import kg.enesaitech.freelancer.vo.SearchResult;
import kg.enesaitech.freelancer.vo.UserVO;

import org.apache.log4j.Logger;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;

@Path("/user")
public class UserWS {

	@Autowired
	protected DozerBeanMapper mapper;

	protected static final Logger log = Logger.getLogger("");
	
	@Autowired
	protected GenericService<User, GenericHome<User>> genericUserService;
	
	@Autowired UserService userService;

	@POST
	@Path("/create")
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(UserVO userVO) {
		User user = new User();
		mapper.map(userVO, user);
		
		userService.create(user);
		
		return Response.ok().build();
	}

	@POST
	@Path("/update/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(UserVO userVO, @PathParam("id") int id) {
				
		User user = genericUserService.get(User.class, id);
		
		if(user == null || user.getId() == null || (userVO.getId() != null && user.getId() != userVO.getId()))
			log.error("Id sent in object doesn't match path id!!!");
		
		User user2 = mapper.map(userVO, User.class);
		userService.update(user2);
		return Response.ok().build();
	}
	

	@GET
	@Path("/delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") int id) {
				
		genericUserService.delete(User.class, id);
		
		return Response.ok().build();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public UserVO get(@PathParam("id") int id) {
		
		User user = genericUserService.get(User.class, id);
		
		UserVO userVO = mapper.map(user, UserVO.class);
		
		return userVO;
	}
	
	
	@POST
	@Path("/list")
	@Produces(MediaType.APPLICATION_JSON)
	public SearchResult<UserVO> search(SearchParameters searchParameters) {

		if(searchParameters == null) searchParameters = new SearchParameters();
		SearchResult<User> searchResult = genericUserService.getList(searchParameters, User.class);
		
		SearchResult<UserVO> searchResultVO = new SearchResult<UserVO>();
		
		mapper.map(searchResult.getResultList(), searchResultVO.getResultList());
		searchResultVO.setTotalRecords(searchResult.getTotalRecords());

		return searchResultVO;

	}
}
