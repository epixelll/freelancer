package kg.enesaitech.freelancer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import kg.enesaitech.freelancer.generic.AbstractEntity;

@Entity
@Table(name="skill")
public class Skill extends AbstractEntity {
	
	private static final long serialVersionUID = 1L;
	
	@Column(name="name", length=100)
	private String name;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="skill_category_id")
	private SkillCategory skillCategory;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public SkillCategory getSkillCategory() {
		return skillCategory;
	}

	public void setSkillCategory(SkillCategory skillCategory) {
		this.skillCategory = skillCategory;
	}


}
