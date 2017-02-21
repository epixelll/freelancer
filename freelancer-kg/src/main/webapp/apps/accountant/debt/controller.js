'use strict';

/* Controllers */
  // DOCTOR controllers


app.controller('DebtListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("personal_debt");
	
}]);
  
app.controller('DebtAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.personalDebt = {};
	$scope.personalDebt.identity = {};
	$scope.personalDebt.currency = {};
    
    restService.all("personal_debt").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.personalDebts = data.originalElement.resultList;
	});

    restService.all("identity").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.identitys = data.originalElement.resultList;
	});

    restService.all("currency").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.currencys = data.originalElement.resultList;
	});

    
    $scope.create = function(){
    	restService.one("personal_debt").customPOST($scope.personalDebt, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('accountant.debt.list')
    	});
    };

}])


    
app.controller('DebtEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {


	$scope.personalDebtId = $stateParams.id;

	restService.all("personal_debt").customGET( $stateParams.id ).then(function(data){
		$scope.personalDebt = data.originalElement;
	});

    restService.all("identity").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.identitys = data.originalElement.resultList;
	});

    restService.all("currency").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.currencys = data.originalElement.resultList;
	});

    
    $scope.update = function(){
    	restService.one("personal_debt").customPOST($scope.personalDebt, "update/" + $scope.personalDebtId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("accountant.debt.list");
    	});
    }
  }]);

