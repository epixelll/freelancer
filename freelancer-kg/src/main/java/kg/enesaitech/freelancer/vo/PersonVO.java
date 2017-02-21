package kg.enesaitech.freelancer.vo;

import java.util.Date;
import java.util.Set;

import kg.enesaitech.freelancer.generic.AbstractVO;

public class PersonVO extends AbstractVO{

	private String fullname;
	
	private String email;
	
	private String phone_number;

	private String skypeId;

	private String linkedinId;
	
	private String website;

	private OwnershipTypeVO ownershipType;
	
	private LocationVO location;
	
	private String aboutMe;
	
	private Set<ProjectSubCategory> specializations;
	
	private Set<SkillVO> professionalSkills;
	
	private float jobExperience;
	
	private Date joinedDate;
	
	private String status;

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getSkypeId() {
		return skypeId;
	}

	public void setSkypeId(String skypeId) {
		this.skypeId = skypeId;
	}

	public String getLinkedinId() {
		return linkedinId;
	}

	public void setLinkedinId(String linkedinId) {
		this.linkedinId = linkedinId;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public OwnershipTypeVO getOwnershipType() {
		return ownershipType;
	}

	public void setOwnershipType(OwnershipTypeVO ownershipType) {
		this.ownershipType = ownershipType;
	}

	public LocationVO getLocation() {
		return location;
	}

	public void setLocation(LocationVO location) {
		this.location = location;
	}

	public String getAboutMe() {
		return aboutMe;
	}

	public void setAboutMe(String aboutMe) {
		this.aboutMe = aboutMe;
	}

	public Set<ProjectSubCategory> getSpecializations() {
		return specializations;
	}

	public void setSpecializations(Set<ProjectSubCategory> specializations) {
		this.specializations = specializations;
	}

	public Set<SkillVO> getProfessionalSkills() {
		return professionalSkills;
	}

	public void setProfessionalSkills(Set<SkillVO> professionalSkills) {
		this.professionalSkills = professionalSkills;
	}

	public float getJobExperience() {
		return jobExperience;
	}

	public void setJobExperience(float jobExperience) {
		this.jobExperience = jobExperience;
	}

	public Date getJoinedDate() {
		return joinedDate;
	}

	public void setJoinedDate(Date joinedDate) {
		this.joinedDate = joinedDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
}
