'use strict';

/* Controllers */
  // Sales controllers


app.controller('OrderListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("order");
	
}]);
  
app.controller('OrderAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.order = {};
	$scope.order.orderedBy = {};
	$scope.order.createdBy = {};
	$scope.order.currency = {};
	
	// delete after back end developed
	$scope.order.createdBy.id= 1;
 
    
    restService.all("identity").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.identitys = data.originalElement.resultList;
	});
    
    
    restService.all("currency").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.currencys = data.originalElement.resultList;
	});
    
    $scope.create = function(){
    	restService.one("order").customPOST($scope.order, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('sales.order.list')
    	});
    };

}])
    
app.controller('OrderEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.orderId = $stateParams.id;
	
	restService.all("order").customGET( $scope.orderId).then(function(data){
		$scope.order= data.originalElement;
	});
    restService.all("order").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.orders = data.originalElement.resultList;
	});
    
    $scope.update = function(){
    	restService.one("order").customPOST($scope.order, "update/" + $scope.orderId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("sales.order.list");
    	});
    }
  }]);

