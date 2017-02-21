package kg.enesaitech.freelancer.vo;

import kg.enesaitech.freelancer.generic.AbstractVO;

public class SkillVO extends AbstractVO {
	
	private String name;
	
	private SkillCategoryVO skillCategory;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public SkillCategoryVO getSkillCategory() {
		return skillCategory;
	}

	public void setSkillCategory(SkillCategoryVO skillCategory) {
		this.skillCategory = skillCategory;
	}


}
