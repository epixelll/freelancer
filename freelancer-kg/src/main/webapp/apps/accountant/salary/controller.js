'use strict';

/* Controllers */
  // DOCTOR controllers


app.controller('SalaryListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("salary");
	
}]);
  
app.controller('SalaryAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.staff = {};
 
    
    restService.all("salary").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffs = data.originalElement.resultList;
	});
    
    
    $scope.create = function(){
    	restService.one("secretary").customPOST($scope.staff, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('accountant.salary.list')
    	});
    };

}])
    
app.controller('salaryEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.staffId = $stateParams.id;
	
	restService.all("salary").customGET( $scope.staffId).then(function(data){
		$scope.staff= data.originalElement;
	});
    restService.all("salary").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffs = data.originalElement.resultList;
	});
    
    $scope.update = function(){
    	restService.one("salary").customPOST($scope.staff, "update/" + $scope.secretaryId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("accountant.salary.list");
    	});
    }
  }]);

