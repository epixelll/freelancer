'use strict';

/* Controllers */
  // signin controller


app.controller('AccessoryCategoryListCtrl', ['$scope','$state','restService','ngTableParams','Utils',  function($scope, $state, restService, ngTableParams, Utils) {


	$scope.tableParams = Utils.standardNgTableInit("accessory_category");
	$scope.accessory_category = {};
 
    
    
    $scope.create = function(){
    	restService.one("accessory_category").customPOST($scope.accessory_category, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.reload();
    	});
    };
}]);

app.controller('AccessoryCategoryEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.accessory_categoryId = $stateParams.id;
	
	restService.all("accessory_category").customGET( $scope.accessory_categoryId).then(function(data){
		$scope.accessory_category= data.originalElement;
	});
 

    $scope.update = function(){
		restService.one("accessory_category").customPOST($scope.accessory_category, "update/" + $scope.accessory_categoryId).then(function(data){
			alert("Успешно обновлено!");
			$state.go('warehouse.accessory_category.list');
		});
    }

}])
    