package kg.enesaitech.freelancer.vo;

import java.util.Date;
import java.util.Set;

import kg.enesaitech.freelancer.generic.AbstractVO;

public class ProjectVO extends AbstractVO {

	private String name;
	
	private String description;
	
	private double budget;
	
	private Set<String> attachements;
	
	private String projectState;
	
	private String projectStatus;
	
	private Date announcementEndDate;
	
	private Set<ProjectSubCategory> projectSubCategories;
	
	private Set<SkillVO> skillsNeeded;

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

	public double getBudget() {
		return budget;
	}

	public void setBudget(double budget) {
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

	public Set<SkillVO> getSkillsNeeded() {
		return skillsNeeded;
	}

	public void setSkillsNeeded(Set<SkillVO> skillsNeeded) {
		this.skillsNeeded = skillsNeeded;
	}
	

}
