'use strict';

/* Controllers */
  // DOCTOR controllers


app.controller('ClientListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("client");
	
}]);
  
app.controller('ClientAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.client = {};
 
    
    restService.all("client").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.clients = data.originalElement.resultList;
	});
    
    
    $scope.create = function(){
    	restService.one("client").customPOST($scope.client, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('sales.client.list')
    	});
    };

}])
    
app.controller('ClientEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.clientId = $stateParams.id;
	
	restService.all("client").customGET( $scope.clientId).then(function(data){
		$scope.client= data.originalElement;
	});
 
    
    $scope.update = function(){
    	restService.one("client").customPOST($scope.client, "update/" + $scope.clientId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("sales.client.list");
    	});
    }
  }]);

