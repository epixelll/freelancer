'use strict';

/* Controllers */
  // DOCTOR controllers


app.controller('OrderListCtrl', ['$scope', '$state', 'restService', 'Utils',  function($scope,$state, restService, Utils) {

	restService.all("order").customPOST({startIndex: 0, resultQuantity: 1000,orderParamDesc:{"date":true}}, "list").then(function(data){
		$scope.orders = data.originalElement.resultList;
	});
	
}]);

app.controller('ListOrderCtrl', ['$scope', '$stateParams', 'restService', 'ngTableParams',  function($scope, $stateParams, restService, ngTableParams) {

	 $scope.testId = $stateParams.id;
	 $scope.standardNgTableInit = function(path, mycount) {
			
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
		        	
		        	searchParams["searchParameters"] = {"orderStage.order.id":$scope.testId};
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
	
	$scope.tableParams = $scope.standardNgTableInit("order_stage_shifting");
}]);
  
app.controller('OrderAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.order_stage_shifting = {};
	$scope.order_stage_shifting.orderStage = {};
	$scope.order_stage_shifting.model = {};
	$scope.order_stage_shifting.color = {};
	$scope.order_stage_shifting.size = {};
 
    
    restService.all("order_stage").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.order_stages = data.originalElement.resultList;
	});

    restService.all("model").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.models = data.originalElement.resultList;
	});
    restService.all("color").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.colors = data.originalElement.resultList;
	});
    restService.all("size").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.sizes = data.originalElement.resultList;
	});
    
    
    $scope.create = function(){
    	if($scope.order_stage_shifting.isApproved==null){
    	    $scope.order_stage_shifting.isApproved=false;
    	    }
    	restService.one("order_stage_shifting").customPOST($scope.order_stage_shifting, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('cutting.order.list_order')
    	});
    };

}])
    
app.controller('DefectsEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.staffId = $stateParams.id;
	
	restService.all("staff").customGET( $scope.staffId).then(function(data){
		$scope.staff= data.originalElement;
	});
    restService.all("staff").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffs = data.originalElement.resultList;
	});
    
    $scope.update = function(){
    	restService.one("staff").customPOST($scope.staff, "update/" + $scope.secretaryId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("cutting.defects.list");
    	});
    }
  }]);

