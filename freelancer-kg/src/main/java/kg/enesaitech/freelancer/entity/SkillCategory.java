package kg.enesaitech.freelancer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import kg.enesaitech.freelancer.generic.AbstractEntity;

@Entity
@Table(name="skill_category")
public class SkillCategory extends AbstractEntity {

	private static final long serialVersionUID = 1L;
	
	@Column(name="name")
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
