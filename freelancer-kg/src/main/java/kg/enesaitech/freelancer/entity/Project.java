package kg.enesaitech.freelancer.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import kg.enesaitech.freelancer.generic.AbstractEntity;

@Entity
@Table(name="project")
public class Project extends AbstractEntity {

	private static final long serialVersionUID = 1L;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	@Column(name="budget")
	private float budget;
	
	@ElementCollection
	@CollectionTable(name="Attachment", joinColumns=@JoinColumn(name="project_id"))
	@Column(name="attachment")
	private Set<String> attachements;
	
	@Column(name="project_state")
	private String projectState;
	
	@Column(name="project_status")
	private String projectStatus;
	
	@Temporal(TemporalType.DATE)
	@Column(name="announcementEndDate")
	private Date announcementEndDate;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="project_project_sub_category", joinColumns=@JoinColumn(name="project_id"),
		inverseJoinColumns=@JoinColumn(name="project_sub_category_id"))
	private Set<ProjectSubCategory> projectSubCategories;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="project_skill", joinColumns=@JoinColumn(name="project_id"), 
		inverseJoinColumns=@JoinColumn(name="skill_id"))
	private Set<Skill> skillsNeeded;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getBudget() {
		return budget;
	}

	public void setBudget(float budget) {
		this.budget = budget;
	}

	public Set<String> getAttachements() {
		return attachements;
	}

	public void setAttachements(Set<String> attachements) {
		this.attachements = attachements;
	}

	public String getProjectState() {
		return projectState;
	}

	public void setProjectState(String projectState) {
		this.projectState = projectState;
	}

	public String getProjectStatus() {
		return projectStatus;
	}

	public void setProjectStatus(String projectStatus) {
		this.projectStatus = projectStatus;
	}

	public Date getAnnouncementEndDate() {
		return announcementEndDate;
	}

	public void setAnnouncementEndDate(Date announcementEndDate) {
		this.announcementEndDate = announcementEndDate;
	}

	public Set<ProjectSubCategory> getProjectSubCategories() {
		return projectSubCategories;
	}

	public void setProjectSubCategories(Set<ProjectSubCategory> projectSubCategories) {
		this.projectSubCategories = projectSubCategories;
	}

	public Set<Skill> getSkillsNeeded() {
		return skillsNeeded;
	}

	public void setSkillsNeeded(Set<Skill> skillsNeeded) {
		this.skillsNeeded = skillsNeeded;
	}
	

}
