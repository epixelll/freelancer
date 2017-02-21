package kg.enesaitech.freelancer.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import kg.enesaitech.freelancer.generic.AbstractEntity;

@Entity
@Table(name="project_category")
public class ProjectCategory extends AbstractEntity{

	private static final long serialVersionUID = 1L;
	
	@Column(name="name", length=100)
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
