'use strict';

/* Controllers */
  // DOCTOR controllers


app.controller('OperationsListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("operations");
	
}]);
  
app.controller('OperationsAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.transaction = {};
	$scope.transaction.cashbox = {};
	$scope.transaction.transactionCategory = {};
	$scope.transaction.currency = {};
	$scope.transaction.order = {};
	 

    restService.all("transaction").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.transactions = data.originalElement.resultList;
	});
    restService.all("transaction_category").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.transactionCategorys = data.originalElement.resultList;
	});
    restService.all("currency").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.currencys = data.originalElement.resultList;
	});
    restService.all("order").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.orders = data.originalElement.resultList;
	});
    
    
    $scope.create = function(){
    	restService.one("transaction").customPOST($scope.transaction, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('accountant.operations.list')
    	});
    };

}])
    
app.controller('OperationsEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.staffId = $stateParams.id;
	
	
	restService.all("transaction").customGET( $stateParams.id ).then(function(data){
		$scope.transactions = data.originalElement;
	});
    restService.all("transaction_category").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.transactionCategorys = data.originalElement.resultList;
	});
    restService.all("currency").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.currencys = data.originalElement.resultList;
	});
    restService.all("order").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.orders = data.originalElement.resultList;
	});
    
    $scope.update = function(){
    	restService.one("operations").customPOST($scope.transaction, "update/" + $scope.secretaryId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("accountant.operations.list");
    	});
    }
  }]);

