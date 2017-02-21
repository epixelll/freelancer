package kg.enesaitech.freelancer.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import kg.enesaitech.freelancer.generic.AbstractEntity;

@Entity
@Table(name="project_sub_category")
public class ProjectSubCategory extends AbstractEntity{

	private static final long serialVersionUID = 1L;
	
	@Column(name="name")
	private String name;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="project_category_id")
	private ProjectCategory projectCategory;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ProjectCategory getProjectCategory() {
		return projectCategory;
	}

	public void setProjectCategory(ProjectCategory projectCategory) {
		this.projectCategory = projectCategory;
	}
	
	
}
