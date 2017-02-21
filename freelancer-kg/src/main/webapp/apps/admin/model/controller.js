'use strict';

/* Controllers */
  // DOCTOR controllers


app.controller('ModelListCtrl', ['$scope', 'Utils',  function($scope, Utils) {
		
	
	$scope.tableParams = Utils.standardNgTableInit("model");
	
}]);
  
app.controller('ModelAddCtrl', ['$scope', '$state', 'restService', '$modal',function($scope, $state, restService, $modal) {

	$scope.model = {};
	$scope.model.sex = {};
	$scope.model.season = {};
	$scope.model.ageCategory = {};
	$scope.model.classification = {};

	
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

  /*  restService.all("size").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.sizes = data.originalElement.resultList;
	});
    
    restService.all("product").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.products = data.originalElement.resultList;
	});*/
    $scope.callModalSeason = function(){
		var modalInstance = $modal.open({
		      templateUrl: '../../apps/admin/model/modalSeason.html',
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
		      templateUrl: '../../apps/admin/model/modalAgeCategory.html',
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
		      templateUrl: '../../apps/admin/model/modalClassification.html',
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
    	if($scope.model.productBasedLine==null){
    		$scope.model.productBasedLine=false;
    	}
    	var fd = new FormData();
		fd.append('model', new Blob([angular.toJson($scope.model)], {type: "application/json"}));
		fd.append('photo', $scope.photo);
	
		restService.one("model").withHttpConfig({transformRequest: angular.identity})
			.customPOST(fd,'create',undefined,{'Content-Type': undefined}).then(function(data){
				alert("Успешно создано!");
	    		$state.go('admin.model.list')
		});
    	
    };

}])
    
app.controller('ModelEditCtrl', ['$scope', '$state', '$stateParams', 'restService', function($scope, $state, $stateParams, restService) {
	
	$scope.model = {};
	$scope.model.sex = {};
	$scope.model.season = {};
	$scope.model.ageCategory = {};
	$scope.model.classification = {};

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
    
    $scope.update = function(){
    	if($scope.model.isLineColorBased==null){
    		$scope.model.isLineColorBased=false;
    	}
    	restService.one("model").customPOST($scope.model, "update/" + $scope.modelId).then(function(data){
    		alert("Успешно обновлено!");
    		$state.go("admin.model.list");
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
		    $state.go('admin.model.add', null, { reload: true });
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
		    $state.go('admin.model.add', null, { reload: true });
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
	  		    $state.go('admin.model.add', null, { reload: true });
	  		});
	  	};
	
	  	$scope.cancel = function () {
	  	    $modalInstance.dismiss('cancel');
	  	};
  		  
}]);

