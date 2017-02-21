

angular.module('app')

.factory("restService", function(Restangular, $rootScope){	
	return Restangular;
})

.factory("Utils", function(restService, $modal, ngTableParams){
	return {
		standardNgTableInit: function(path, mycount) {
			
			return new ngTableParams({
		        page: 1,            // show first page
		        count: mycount != null ? mycount : 10, 			// count per page
		        sorting: {
		            name: 'asc'     // initial sorting
		        },				
		    }, {
		        total: 0, // length of data
		        getData: function($defer, params){
		        	var searchParams = {};
		        	var prm = params.parameters();

		        	searchParams["startIndex"] = (angular.isNumber(prm.page) && angular.isNumber(prm.count)) ? (prm.page-1)*prm.count : 1 ;
		        	searchParams["resultQuantity"] = angular.isNumber(prm.count) ? prm.count : 10 ;
		        	
		        	searchParams["searchParameters"] = {};
		        	angular.forEach(prm.filter, function(value, key){
		        		searchParams.searchParameters[key] = value;
		        	});
		        	
		        	searchParams["orderParamDesc"] = {};
		        	angular.forEach(prm.sorting, function(value, key){
		        		searchParams.orderParamDesc[key] = (value == "desc");
		        	});
		        	
		        	restService.all(path).customPOST(searchParams, ['list']).then(function(data){
		        		params.total(data.originalElement.totalRecords);
		                // set new data
		                $defer.resolve(data.originalElement.resultList);
		    		});
		        },
		    });
			
		}
	}
});