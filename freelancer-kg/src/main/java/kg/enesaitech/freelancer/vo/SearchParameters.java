package kg.enesaitech.freelancer.vo;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class SearchParameters {
	private Integer startIndex;
	private Integer resultQuantity;
	private Map<String, String> searchParameters = new LinkedHashMap<String, String>();
	private Map<String, Boolean> orderParamDesc = new LinkedHashMap<String, Boolean>();
	private List<SearchParamWithType> searchParamWithTypes = new ArrayList<SearchParamWithType>();
	
	public List<SearchParamWithType> getSearchParamWithTypes() {
		return searchParamWithTypes;
	}


	public void setSearchParamWithTypes(
			List<SearchParamWithType> searchParamWithTypes) {
		this.searchParamWithTypes = searchParamWithTypes;
	}


	public SearchParameters() {
	}

		
	public SearchParameters(Integer startIndex, Integer resultQuantity, Map<String, String> searchParameters, Map<String, Boolean> orderByparameters) {
		this.startIndex = startIndex;
		this.resultQuantity = resultQuantity;
		this.searchParameters = searchParameters;
		this.orderParamDesc = orderByparameters;
	}
	
	public void addParameter(String name, String value){
		this.searchParameters.put(name, value);
	}
	
	public Integer getStartIndex() {
		return startIndex;
	}
	
	public void setStartIndex(Integer startIndex) {
		this.startIndex = startIndex;
	}

	public Integer getResultQuantity() {
		return resultQuantity;
	}

	public void setResultQuantity(Integer resultQuantity) {
		this.resultQuantity = resultQuantity;
	}

	public Map<String, String> getSearchParameters() {
		return searchParameters;
	}

	public void setSearchParameters(Map<String, String> searchParameters) {
		this.searchParameters = searchParameters;
	}

	public Map<String, Boolean> getOrderParamDesc() {
		return orderParamDesc;
	}

	public void setOrderParamDesc(Map<String, Boolean> orderByParameters) {
		this.orderParamDesc = orderByParameters;
	}
}