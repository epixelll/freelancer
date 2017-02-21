'use strict';

/* Controllers */
  // signin controller


app.controller('ServiceListCtrl', ['$scope','restService','ngTableParams','Utils',  function($scope, restService, ngTableParams, Utils) {


	$scope.tableParams = Utils.standardNgTableInit("service");
  }]);

app.controller('ServiceAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.accessory = {};
	$scope.accessory.serviceCategory = {};
	$scope.accessory.pricing = {};
 
    
    restService.all("pricing").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.pricings = data.originalElement.resultList;
	});

    restService.all("service_category").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.service_categories = data.originalElement.resultList;
	});
    
    
    $scope.create = function(){
    	restService.one("service").customPOST($scope.service, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('warehouse.service.list');
    	});
    };

}])
app.controller('ServiceEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.serviceId = $stateParams.id;
	
	restService.all("service").customGET( $scope.serviceId).then(function(data){
		$scope.service= data.originalElement;
	});
 
    
	 restService.all("pricing").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
			$scope.pricings = data.originalElement.resultList;
		});

	    restService.all("service_category").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
			$scope.service_categories = data.originalElement.resultList;
		});

    $scope.update = function(){
		restService.one("service").customPOST($scope.service, "update/" + $scope.serviceId).then(function(data){
			alert("Успешно обновлено!");
			$state.go('warehouse.service.list');
		});
    }

}])
    