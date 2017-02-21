'use strict';

/* Controllers */

app.controller('ClassificationListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("classification");
	
}]);
  
app.controller('ClassificationAddCtrl', ['$scope', '$state', 'restService', function($scope, $state, restService) {

	$scope.classification = {};
 
    
    restService.all("classification").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.classifications = data.originalElement.resultList;
	});
    
    
    $scope.create = function(){
    	restService.one("classification").customPOST($scope.classification, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('modeling.classification.classificationList')
    	});
    };

}])
    
app.controller('ClassificationEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {

	$scope.classificationId = $stateParams.id;
	
	restService.all("classification").customGET( $scope.classificationId).then(function(data){
		$scope.classification = data.originalElement;
	});
    
    $scope.update = function(){
    	restService.one("classification").customPOST($scope.classification, "update/" + $scope.classificationId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("modeling.classification.classificationList");
    	});
    }
  }]);

