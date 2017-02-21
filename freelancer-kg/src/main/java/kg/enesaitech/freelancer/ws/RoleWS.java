package kg.enesaitech.freelancer.ws;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import kg.enesaitech.freelancer.entity.Role;
import kg.enesaitech.freelancer.generic.GenericHome;
import kg.enesaitech.freelancer.generic.GenericService;
import kg.enesaitech.freelancer.vo.RoleVO;
import kg.enesaitech.freelancer.vo.SearchParameters;
import kg.enesaitech.freelancer.vo.SearchResult;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;

@Path("/role")
public class RoleWS{
	
	@Autowired
	protected DozerBeanMapper mapper;
	
	@Autowired
	GenericService<Role, GenericHome<Role>> genericRoleService;

	@POST
	@Path("/list")
	@Produces(MediaType.APPLICATION_JSON)
	public SearchResult<RoleVO> search(SearchParameters searchParameters) {

		if(searchParameters == null) searchParameters = new SearchParameters();
		SearchResult<Role> roleResult = genericRoleService.getList(searchParameters, Role.class);
		
		SearchResult<RoleVO> roleResultVO = new SearchResult<RoleVO>();
		
		mapper.map(roleResult.getResultList(), roleResultVO.getResultList());
		roleResultVO.setTotalRecords(roleResult.getTotalRecords());

		return roleResultVO;

	}

}
