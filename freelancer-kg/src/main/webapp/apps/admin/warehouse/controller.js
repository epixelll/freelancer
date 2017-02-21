'use strict';

/* Controllers */
  // SHEN controllers


app.controller('WarehouseListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("warehouse");
	
}]);
  
app.controller('WarehouseAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.warehouse = {};
 
    
    restService.all("warehouse").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.warehouses = data.originalElement.resultList;
	});
    
    restService.all("staff").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffs = data.originalElement.resultList;
	});

    $scope.create = function(){
    	restService.one("warehouse").customPOST($scope.warehouse, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('admin.warehouse.list')
    	});
    };

}])
    
app.controller('WarehouseEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.warehouseId = $stateParams.id;
	
	restService.all("warehouse").customGET( $scope.warehouseId).then(function(data){
		$scope.warehouse= data.originalElement;
	});
    restService.all("staff").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffs = data.originalElement.resultList;
	});
    
    $scope.update = function(){
    	restService.one("warehouse").customPOST($scope.warehouse, "update/" + $scope.warehouseId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("admin.warehouse.list");
    	});
    }
  }]);

