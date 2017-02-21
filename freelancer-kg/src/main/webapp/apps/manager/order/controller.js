'use strict';

/* Controllers */
  // DOCTOR controllers


app.controller('OrderListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("order");
	
}]);

app.controller('OrderAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.order = {};
	$scope.order.identity= {};
	$scope.order.staff = {};
	$scope.order.currency = {};
	
    restService.all("order").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.orders = data.originalElement.resultList;
	});
    
    restService.all("identity").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.identitys = data.originalElement.resultList;
	});
    
    restService.all("staff").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffs = data.originalElement.resultList;
	});
    
    restService.all("currency").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.currencys = data.originalElement.resultList;
	});
    
    $scope.create = function(){
    	restService.one("order").customPOST($scope.order, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('manager.order.list')
    	});
    };

}])
    
app.controller('OrderEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {
	
	$scope.order = {};
	$scope.order.identity= {};
	$scope.order.staff = {};
	$scope.order.currency = {};
	$scope.orderId = $stateParams.id;

    restService.all("order").customPOST( $scope.orderId ).then(function(data){
		$scope.order = data.originalElement;
	});
    
    restService.all("identity").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.identitys = data.originalElement.resultList;
	});
    
    restService.all("staff").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffs = data.originalElement.resultList;
	});
    
    restService.all("currency").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.currencys = data.originalElement.resultList;
	});
    
    $scope.update = function(){
    	restService.one("order").customPOST($scope.order, "update/" + $scope.orderId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("manager.model.list");
    	});
    }
  }]);

