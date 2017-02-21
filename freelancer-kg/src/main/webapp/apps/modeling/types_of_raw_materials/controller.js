'use strict';

/* Controllers */
  // DOCTOR controllers

app.controller('AccessoryListCtrl', ['$scope','restService','ngTableParams','Utils',  function($scope, restService, ngTableParams, Utils) {


	$scope.tableParams = Utils.standardNgTableInit("accessory");
  }]);
/*app.controller('AccessoriesListCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.acces = {};
    
    restService.all("acces").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.acceses = data.originalElement.resultList;
	});
    

}])*/
app.controller('FabricListCtrl', ['$scope','restService','ngTableParams','Utils',  function($scope, restService, ngTableParams, Utils) {


	$scope.tableParams = Utils.standardNgTableInit("fabric");
  }]);
  
/*app.controller('FabricListCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.fabric = {};
    
    restService.all("fabric").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.fabrics = data.originalElement.resultList;
	});
    

}])*/

  
app.controller('ProductListCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.product = {};
    
    restService.all("product").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.products = data.originalElement.resultList;
	});
    

}])
