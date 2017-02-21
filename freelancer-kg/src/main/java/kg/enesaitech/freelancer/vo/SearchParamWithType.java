package kg.enesaitech.freelancer.vo;

import kg.enesaitech.freelancer.other.RequestComparisonType;

public class SearchParamWithType {
	
	private String searchField;
	private String searchValue;
	private String valueForBetween; 
	private RequestComparisonType searchType;
	
	
	public String getValueForBetween() {
		return valueForBetween;
	}
	public void setValueForBetween(String valueForBetween) {
		this.valueForBetween = valueForBetween;
	}
	public String getSearchField() {
		return searchField;
	}
	public void setSearchField(String searchField) {
		this.searchField = searchField;
	}
	public String getSearchValue() {
		return searchValue;
	}
	public void setSearchValue(String searchValue) {
		this.searchValue = searchValue;
	}
	public RequestComparisonType getSearchType() {
		return searchType;
	}
	public void setSearchType(RequestComparisonType searchType) {
		this.searchType = searchType;
	}

}
