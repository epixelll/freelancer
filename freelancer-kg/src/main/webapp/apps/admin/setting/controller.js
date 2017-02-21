'use strict';

/* Controllers */
  // shen controllers


//---------------------------------------- SIZE START ------------------------------------------------------------

app.controller('SizeListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
	
	$scope.tableParams = Utils.standardNgTableInit("size");
	
}]);
  
app.controller('SizeAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.size = {};
 
    
    restService.all("size").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.sizes = data.originalElement.resultList;
	});
    
    $scope.create = function(){
    	restService.one("size").customPOST($scope.size, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('admin.setting.sizeList')
    	});
    };

}])
    
app.controller('SizeEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.sizeId = $stateParams.id;
	
	restService.all("size").customGET( $scope.sizeId ).then(function(data){
		$scope.size= data.originalElement;
	});

	$scope.update = function(){
    	restService.one("size").customPOST($scope.size, "update/" + $scope.sizeId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("admin.setting.sizeList");
    	});
    }
  }]);


//---------------------------------------- COLOR START ------------------------------------------------------------

app.controller('ColorListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
	
	$scope.tableParams = Utils.standardNgTableInit("color");
	
}]);
  
app.controller('ColorAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.color = {};
 
    
    restService.all("color").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.colors = data.originalElement.resultList;
	});
    
    
    $scope.create = function(){
    	restService.one("color").customPOST($scope.color, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('admin.setting.colorList')
    	});
    };

}])
    
app.controller('ColorEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.colorId = $stateParams.id;
	
	restService.all("color").customGET( $scope.colorId).then(function(data){
		$scope.color= data.originalElement;
	});
    
    $scope.update = function(){
    	restService.one("color").customPOST($scope.color, "update/" + $scope.colorId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("admin.setting.colorList");
    	});
    }
  }]);