package kg.enesaitech.freelancer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import kg.enesaitech.freelancer.generic.AbstractEntity;


@Entity
@Table(name = "user")
public class User extends AbstractEntity {

	private static final long serialVersionUID = 1L;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "person_id")
	private Person person;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "role_id", nullable = false)
	private Role role;

	@Column(name = "username", nullable = false, length = 100)
	private String username;
	
	@Column(name = "password", nullable = false, length = 150)
	private String password;
	
	@Transient
	private Boolean changePassword;


	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
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

	public Boolean getChangePassword() {
		return changePassword;
	}

	public void setChangePassword(Boolean changePassword) {
		this.changePassword = changePassword;
	}

}