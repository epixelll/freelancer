'use strict';

/* Controllers */
  // PRODUCT controllers


app.controller('ProductListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("product");
	
}]);
  
app.controller('ProductAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.product = {};
 
    
    restService.all("product").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.products = data.originalElement.resultList;
	});
    
    
    $scope.create = function(){
    	restService.one("secretary").customPOST($scope.product, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('sales.product.list')
    	});
    };

}])
    
app.controller('productEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.productId = $stateParams.id;
	
	restService.all("product").customGET( $scope.productId).then(function(data){
		$scope.product= data.originalElement;
	});
    restService.all("product").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.products = data.originalElement.resultList;
	});
    
    $scope.update = function(){
    	restService.one("product").customPOST($scope.product, "update/" + $scope.secretaryId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("sales.product.list");
    	});
    }
  }]);

