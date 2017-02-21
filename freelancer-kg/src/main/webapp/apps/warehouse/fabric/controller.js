'use strict';

/* Controllers */
  // signin controller


app.controller('FabricListCtrl', ['$scope','restService','ngTableParams','Utils',  function($scope, restService, ngTableParams, Utils) {


	$scope.tableParams = Utils.standardNgTableInit("fabric");
  }]);

app.controller('FabricAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.fabric = {};
	$scope.fabric.color = {};

    restService.all("color").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.colors = data.originalElement.resultList;
	});
//    $scope.addNewBrand = function(){
//    	Modals.callNewBrandModal();
//    }
    
    $scope.create = function(){
    	restService.one("fabric").customPOST($scope.fabric, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('warehouse.fabric.list');
    	});
    };

}])
app.controller('FabricEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.fabricId = $stateParams.id;
	
	restService.all("fabric").customGET( $scope.fabricId).then(function(data){
		$scope.fabric= data.originalElement;
	});

    restService.all("color").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.colors = data.originalElement.resultList;
	});

    $scope.update = function(){
		restService.one("fabric").customPOST($scope.fabric, "update/" + $scope.fabricId).then(function(data){
			alert("Успешно обновлено!");
			$state.go('warehouse.fabric.list');
		});
    }

}])
    