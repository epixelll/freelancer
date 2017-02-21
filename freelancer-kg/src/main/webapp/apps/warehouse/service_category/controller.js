'use strict';

/* Controllers */
  // signin controller


app.controller('ServiceListCtrl', ['$scope','$state','restService','ngTableParams','Utils',  function($scope, $state, restService, ngTableParams, Utils) {


	$scope.tableParams = Utils.standardNgTableInit("service_category");
	$scope.service_category = {};
 
    
    
    $scope.create = function(){
    	restService.one("service_category").customPOST($scope.service_category, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.reload();
    	});
    };
}]);

app.controller('ServiceCategoryEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.service_categoryId = $stateParams.id;
	
	restService.all("service_category").customGET( $scope.service_categoryId).then(function(data){
		$scope.service_category= data.originalElement;
	});
 

    $scope.update = function(){
		restService.one("service_category").customPOST($scope.service_category, "update/" + $scope.service_categoryId).then(function(data){
			alert("Успешно обновлено!");
			$state.go('warehouse.service_category.list');
		});
    }

}])
    