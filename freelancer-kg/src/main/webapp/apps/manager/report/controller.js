'use strict';

/* Controllers */
  // DOCTOR controllers


app.controller('StaffListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("staff");
	
}]);
  
app.controller('StaffAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.staff = {};
 
    
    restService.all("staff").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffs = data.originalElement.resultList;
	});
    
    
    $scope.create = function(){
    	restService.one("secretary").customPOST($scope.staff, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('hr_manager.staff.list')
    	});
    };

}])
    
app.controller('staffEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.staffId = $stateParams.id;
	
	restService.all("staff").customGET( $scope.staffId).then(function(data){
		$scope.staff= data.originalElement;
	});
    restService.all("staff").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffs = data.originalElement.resultList;
	});
    
    $scope.update = function(){
    	restService.one("staff").customPOST($scope.staff, "update/" + $scope.secretaryId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("hr_manager.staff.list");
    	});
    }
  }]);

