package kg.enesaitech.freelancer.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import kg.enesaitech.freelancer.generic.AbstractEntity;

@Entity
@Table(name="person")
public class Person extends AbstractEntity{

	private static final long serialVersionUID = 1L;
	
	@Column(name="fullname", length=100)
	private String fullname;
	
	@Column(name="email", length=100)
	private String email;
	
	@Column(name="phone_number", length=50)
	private String phone_number;

	@Column(name="skype_id", length=50)
	private String skypeId;

	@Column(name="linkedin_id", length=50)
	private String linkedinId;
	
	@Column(name="website")
	private String website;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="c_ownership_type_id")
	private OwnershipType ownershipType;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="location_id")
	private Location location;
	
	@Column(name="f_about_me", length=600)
	private String aboutMe;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="person_project_sub_category", joinColumns=@JoinColumn(name="person_id"), 
		inverseJoinColumns = @JoinColumn(name="projet_sub_category_id"))
	private Set<ProjectSubCategory> specializations;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="person_skill", joinColumns=@JoinColumn(name="person_id"), 
		inverseJoinColumns=@JoinColumn(name="skill_id"))
	private Set<Skill> professionalSkills;
	
	@Column(name="f_job_experience")
	private double jobExperience;
	
	@Temporal(TemporalType.DATE)
	@Column(name="joined_date")
	private Date joinedDate;
	
	@Column(name="status")
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

	public OwnershipType getOwnershipType() {
		return ownershipType;
	}

	public void setOwnershipType(OwnershipType ownershipType) {
		this.ownershipType = ownershipType;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
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

	public Set<Skill> getProfessionalSkills() {
		return professionalSkills;
	}

	public void setProfessionalSkills(Set<Skill> professionalSkills) {
		this.professionalSkills = professionalSkills;
	}

	public double getJobExperience() {
		return jobExperience;
	}

	public void setJobExperience(double jobExperience) {
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
