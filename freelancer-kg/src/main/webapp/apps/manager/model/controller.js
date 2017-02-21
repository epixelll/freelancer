'use strict';

/* Controllers */
  // Manager controllers


app.controller('ModelListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	$scope.tableParams = Utils.standardNgTableInit("model");
	
}]);
  
app.controller('ModelAddCtrl', ['$scope', '$state', 'restService','$modal', 
                                function($scope, $state, restService,$modal) {

	$scope.model = {};
	$scope.model.sex = {};
	$scope.model.season = {};
	$scope.model.ageCategory = {};
	$scope.model.classification = {};
/*	$scope.model.photos = {};*/
	
    restService.all("model").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.models = data.originalElement.resultList;
	});
    
    restService.all("sex").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.sexs = data.originalElement.resultList;
	});
    
    restService.all("season").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.seasons = data.originalElement.resultList;
	});
    
    restService.all("age_category").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.ageCategorys = data.originalElement.resultList;
	});

    restService.all("classification").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.classifications = data.originalElement.resultList;
	});
    
    $scope.callModalSeason = function(){
		var modalInstance = $modal.open({
		      templateUrl: '../../apps/manager/model/modalSeason.html',
		      controller: 'ModalSeasonCtrl',
		      size: 'sm',
		      resolve: {
		      			}
		    });

		    modalInstance.result.then(function (selectedItem) {
		    	
		    }, function () {
		      return;
		    });
	};
    
    $scope.callModalAgeCategory = function(){
		var modalInstance = $modal.open({
		      templateUrl: '../../apps/manager/model/modalAgeCategory.html',
		      controller: 'ModalAgeCategoryCtrl',
		      size: 'sm',
		      resolve: {
		      			}
		    });

		    modalInstance.result.then(function (selectedItem) {
		    	
		    }, function () {
		      return;
		    });
	};
    
    $scope.callModalClassification = function(){
		var modalInstance = $modal.open({
		      templateUrl: '../../apps/manager/model/modalClassification.html',
		      controller: 'ModalClassificationCtrl',
		      size: 'sm',
		      resolve: {
		      			}
		    });

		    modalInstance.result.then(function (selectedItem) {
		    	
		    }, function () {
		      return;
		    });
	};
    
    
    $scope.create = function(){
    	if($scope.model.isLineColorBased==null){
    		$scope.model.isLineColorBased=false;
    	}
    	restService.one("model").customPOST($scope.model, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('manager.model.list')
    	});
    };

}])
    
app.controller('ModelEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {
	
	$scope.model = {};
	$scope.model.sex = {};
	$scope.model.season = {};
	$scope.model.ageCategory = {};
	$scope.model.classification = {};
	/*$scope.model.photos = {};*/
	$scope.modelId = $stateParams.id;
	
	restService.all("model").customGET( $scope.modelId ).then(function(data){
		$scope.model = data.originalElement;
	});
    
	 restService.all("sex").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.sexs = data.originalElement.resultList;
	});
    
    restService.all("season").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.seasons = data.originalElement.resultList;
	});
    
    restService.all("age_category").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.ageCategorys = data.originalElement.resultList;
	});

    restService.all("classification").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.classifications = data.originalElement.resultList;
	});
    
    /*restService.all("photos").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.photoses = data.originalElement.resultList;
	});*/
    
    $scope.update = function(){
    	restService.one("model").customPOST($scope.model, "update/" + $scope.modelId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("manager.model.list");
    	});
    }
  }])
  
app.controller('ModalSeasonCtrl', ['$scope', '$state','$stateParams', '$modalInstance', '$rootScope',  'restService', 
                         function ($scope, $state, $stateParams,$modalInstance, $rootScope, restService) {
	
	$scope.season = $stateParams.id;

	$scope.create = function(){
		restService.one("season").customPOST($scope.season, "create").then(function(data){
			alert("Успешно создано!");
		    $modalInstance.close('ok');
		    $state.go('manager.model.add', null, { reload: true });
		});
	};

	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};
		  
}])
app.controller('ModalAgeCategoryCtrl', ['$scope', '$state','$stateParams', '$modalInstance', '$rootScope',  'restService', 
                         function ($scope, $state, $stateParams,$modalInstance, $rootScope, restService) {
	
	$scope.ageCategory = $stateParams.id;

	$scope.create = function(){
		restService.one("age_category").customPOST($scope.ageCategory, "create").then(function(data){
			alert("Успешно создано!");
		    $modalInstance.close('ok');
		    $state.go('manager.model.add', null, { reload: true });
		});
	};

	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};
		  
}]);
app.controller('ModalClassificationCtrl', ['$scope', '$state','$stateParams', '$modalInstance', '$rootScope',  'restService', 
                                   function ($scope, $state, $stateParams,$modalInstance, $rootScope, restService) {
          	
	  	$scope.classification = $stateParams.id;
	
	  	$scope.create = function(){
	  		restService.one("classification").customPOST($scope.classification, "create").then(function(data){
	  			alert("Успешно создано!");
	  		    $modalInstance.close('ok');
	  		    $state.go('manager.model.add', null, { reload: true });
	  		});
	  	};
	
	  	$scope.cancel = function () {
	  	    $modalInstance.dismiss('cancel');
	  	};
  		  
}]);
   
 