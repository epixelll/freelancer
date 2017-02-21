package kg.enesaitech.freelancer.vo;

import kg.enesaitech.freelancer.generic.AbstractVO;

public class UserVO extends AbstractVO {

	
	private PersonVO person;
	private RoleVO role;
	private String username;
	private String password;
	private Boolean changePassword;

	public UserVO() {
	}

	public RoleVO getRole() {
		return this.role;
	}

	public void setRole(RoleVO role) {
		this.role = role;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public PersonVO getPerson() {
		return person;
	}

	public void setPerson(PersonVO staff) {
		this.person = staff;
	}

	public Boolean getChangePassword() {
		return changePassword;
	}

	public void setChangePassword(Boolean changePassword) {
		this.changePassword = changePassword;
	}

}
