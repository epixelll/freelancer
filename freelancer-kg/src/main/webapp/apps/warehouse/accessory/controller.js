'use strict';

/* Controllers */
  // signin controller


app.controller('AccessoryListCtrl', ['$scope','restService','ngTableParams','Utils',  function($scope, restService, ngTableParams, Utils) {


	$scope.tableParams = Utils.standardNgTableInit("accessory");
  }]);

app.controller('AccessoryAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.accessory = {};
	$scope.accessory.accessoryCategory = {};
	$scope.accessory.unit = {};
 
    
    restService.all("unit").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.units = data.originalElement.resultList;
	});

    restService.all("accessory_category").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.accessory_categories = data.originalElement.resultList;
	});
    
    
    $scope.create = function(){
    	restService.one("accessory").customPOST($scope.accessory, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('warehouse.accessory.list');
    	});
    };

}])
app.controller('AccessoryEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.accessoryId = $stateParams.id;
	
	restService.all("accessory").customGET( $scope.accessoryId).then(function(data){
		$scope.accessory= data.originalElement;
	});
 
    
	restService.all("unit").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.units = data.originalElement.resultList;
	});

    restService.all("accessory_category").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.accessory_categories = data.originalElement.resultList;
	});

    $scope.update = function(){
		restService.one("accessory").customPOST($scope.accessory, "update/" + $scope.accessoryId).then(function(data){
			alert("Успешно обновлено!");
			$state.go('warehouse.accessory.list');
		});
    }

}])
    