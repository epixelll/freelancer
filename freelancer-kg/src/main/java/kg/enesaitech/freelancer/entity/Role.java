package kg.enesaitech.freelancer.entity;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import kg.enesaitech.freelancer.generic.AbstractEntity;

@Entity
@Table(name = "role")
public class Role extends AbstractEntity {

	private static final long serialVersionUID = 1L;
	
	@Column(name = "name", nullable = false, length = 100)
	private String name;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "role")
	private Set<User> users = new HashSet<User>(0);

	public Role() {
	}

	public Role(String name) {
		this.name = name;
	}

	public Role(String name, Set<User> users) {
		this.name = name;
		this.users = users;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<User> getUsers() {
		return this.users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

}