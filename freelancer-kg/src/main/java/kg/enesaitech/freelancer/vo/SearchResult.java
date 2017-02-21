package kg.enesaitech.freelancer.vo;

import java.util.ArrayList;
import java.util.List;


public class SearchResult<T> {
	Integer totalRecords;
	List<T> resultList;
	
	public SearchResult() {
		totalRecords = 0;
		resultList = new ArrayList<T>();
	}
	
	public SearchResult(List<T> resultList) {
		totalRecords = resultList.size();
		this.resultList = resultList;
	}

	public SearchResult(Integer totalRecord, List<T> resultList) {
		this.totalRecords = totalRecord;
		this.resultList = resultList;
	}
	
	public Integer getTotalRecords() {
		return totalRecords;
	}
	
	public void setTotalRecords(Integer totalRecords) {
		this.totalRecords = totalRecords;
	}
	
	public List<T> getResultList() {
		return resultList;
	}
	
	public void setResultList(List<T> resultList) {
		this.resultList = resultList;
	}
}