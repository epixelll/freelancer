package kg.enesaitech.freelancer.vo;

import java.util.HashSet;
import java.util.Set;

import kg.enesaitech.freelancer.generic.AbstractVO;

public class RoleVO extends AbstractVO {

	private String name;
	private Set<UserVO> users = new HashSet<UserVO>(0);

	public RoleVO() {
	}

	public RoleVO(String name) {
		this.name = name;
	}

	public RoleVO(String name, Set<UserVO> users) {
		this.name = name;
		this.users = users;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<UserVO> getUsers() {
		return this.users;
	}

	public void setUsers(Set<UserVO> users) {
		this.users = users;
	}

}
