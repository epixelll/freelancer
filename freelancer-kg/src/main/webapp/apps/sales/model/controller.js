'use strict';

/* Controllers */
  // MODEL controllers


app.controller('ModelListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("model");
	
}]);
  
app.controller('ModelAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.model = {};
	$scope.model.sex = {};
	$scope.model.season = {};
	$scope.model.ageCategory = {};
	$scope.model.classification = {};
	$scope.model.photo = {};
	$scope.model.model = {};
    
    restService.all("model").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.models = data.originalElement.resultList;
	});
    
    restService.all("sex").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.sexs = data.originalElement.resultList;
	});
    
    restService.all("season").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.seasons = data.originalElement.resultList;
	});
    
    restService.all("ageCategory").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.ageCategorys = data.originalElement.resultList;
	});
    restService.all("classification").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.classifications = data.originalElement.resultList;
	});
    
    restService.all("photo").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.photos = data.originalElement.resultList;
	});
        
    
    $scope.create = function(){
    	restService.one("model").customPOST($scope.model, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('sales.model.list')
    	});
    };

}])
    
app.controller('modelEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.modelId = $stateParams.id;
	
	restService.all("model").customGET( $scope.modelId).then(function(data){
		$scope.model= data.originalElement;
	});
    restService.all("model").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.models = data.originalElement.resultList;
	});
    
    $scope.update = function(){
    	restService.one("model").customPOST($scope.model, "update/" + $scope.modelId).then(function(data){
    		alert("Успешно обновлено!");									// secretary менять? 	
    		$state.go("sales.model.list");
    	});
    }
  }]);

