'use strict';

/* Controllers */
  // HR_MANAGER controllers


app.controller('StaffListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("staff");
	
}]);
  
app.controller('StaffAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.staff = {};    
    
    $scope.create = function(){
    	restService.one("staff").customPOST($scope.staff, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('hr_manager.staff.list')
    	});
    };

}])
    
app.controller('StaffEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.staffId = $stateParams.id;
	
	restService.all("staff").customGET( $scope.staffId).then(function(data){
		$scope.staff= data.originalElement;
	});
    
    $scope.update = function(){
    	restService.one("staff").customPOST($scope.staff, "update/" + $scope.staffId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("hr_manager.staff.list");
    	});
    }
  }]);

