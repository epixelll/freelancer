'use strict';

/* Controllers */
  // signin controller


app.controller('DeffectiveListCtrl', ['$scope','restService','ngTableParams','Utils',  function($scope, restService, ngTableParams, Utils) {


	$scope.tableParams = Utils.standardNgTableInit("deffective");
  }]);


app.controller('DeffectiveAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.deffective = {};
	$scope.deffective.orderStage = {};
	$scope.deffective.model = {};
	$scope.deffective.color = {};
	$scope.deffective.size = {};
	$scope.deffective.createdBy = {};
 
    
    restService.all("order_stage").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.order_stages = data.originalElement.resultList;
	});

    restService.all("model").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.models = data.originalElement.resultList;
	});
    restService.all("color").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.colors = data.originalElement.resultList;
	});
    restService.all("size").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.sizes = data.originalElement.resultList;
	});
    
    restService.all("staff").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffies = data.originalElement.resultList;
	});
    
    $scope.create = function(){
    	restService.one("deffective").customPOST($scope.deffective, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('embroidery.deffective.list');
    	});
    };

}])
app.controller('DeffectiveEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.deffectiveId = $stateParams.id;
	restService.all("deffective").customGET( $scope.deffectiveId).then(function(data){
		$scope.deffective= data.originalElement;
	});
	
    restService.all("order_stage").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.order_stages = data.originalElement.resultList;
	});

    restService.all("model").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.models = data.originalElement.resultList;
	});
    restService.all("color").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.colors = data.originalElement.resultList;
	});
    restService.all("size").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.sizes = data.originalElement.resultList;
	});
    
    restService.all("staff").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.staffies = data.originalElement.resultList;
	});

    $scope.update = function(){
		restService.one("deffective").customPOST($scope.deffective, "update/" + $scope.deffectiveId).then(function(data){
			alert("Успешно обновлено!");
			$state.go('embroidery.deffective.list');
		});
    }

}])
    