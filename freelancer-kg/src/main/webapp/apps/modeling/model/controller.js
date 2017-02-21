'use strict';

/* Controllers */
// DOCTOR controllers


app.controller('ModelListCtrl', ['$scope','$modal', 'Utils','restService',  function($scope,$modal, Utils,restService) {

	restService.all("model").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.models = data.originalElement.resultList;
	});
	
	 $scope.listModelModal = function( id){
			var modalInstance = $modal.open({
			      templateUrl: 'ModalListModel.html',
			      controller: 'ModalListCtrl',
			      size: 'sm'
			    });
	 }
}]);

app.controller('ModalListCtrl', ['$scope', '$modalInstance','$stateParams', '$rootScope','restService', function ($scope, $modalInstance,$stateParams, $rootScope,restService) {

	$scope.modelId = $stateParams.id;
	
	restService.all("model").customGET( $scope.modelId).then(function(data){
		$scope.model= data.originalElement;
	});
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	  
	  
}]);


app.controller('ModelAddCtrl', ['$scope','$modal', '$state', 'restService',  function($scope,$modal, $state, restService) {

	
	$scope.model = {};
	$scope.model.sex = {};
	$scope.model.season = {};
	$scope.model.ageCategory = {};
	$scope.model.classification = {};
	$scope.sizes = [];
	$scope.model.productBasedLine = false;
	
	$scope.addProduct = function(){
		var modalInstance = $modal.open({
		      templateUrl: 'model/add_product_modal.html',
		      controller: 'AddProductCtrl',
		      size: 'lg'
		    });
		
		modalInstance.result.then(function (result) {
            console.log('result: ' + result);
             $scope.data = result;
        }, function () {
            console.info('Modal dismissed at: ' + new Date());
        });

		
	}
	
	 $scope.listFabricModal = function( id){
			var modalInstance = $modal.open({
			      templateUrl: 'ModalListFabric.html',
			      controller: 'ModalFabricCtrl',
			      size: 'sm'
			    });
	 }
///////////////////////////////////////////////////////////
	function readURL(input) {

	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#blah').attr('src', e.target.result);
	        }

	        reader.readAsDataURL(input.files[0]);
	    }
	}

	$("#imgInp").change(function(){
	    readURL(this);
	});
	
	
	restService.all("model").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.models = data.originalElement.resultList;
	});

	restService.all("sex").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.sexes = data.originalElement.resultList;
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
	
	restService.all("size").customPOST( {startIndex: 0, resultQuantity: 1000}, "list" ).then(function(data){
		$scope.sizes= data.originalElement.resultList;
	});


	$scope.create = function(){
		restService.one("model").customPOST($scope.model, "create").then(function(data){
			alert("Успешно создано!");
			$state.go('modeling.model.list')
		});
	};

}])

app.controller('ModalFabricCtrl', ['$scope', '$modalInstance','$stateParams', '$rootScope','restService', function ($scope, $modalInstance,$stateParams, $rootScope,restService) {
	
	$scope.FabricId = $stateParams.id;
	
	restService.all("fabric").customGET( $scope.fabricId).then(function(data){
		$scope.fabric= data.originalElement;
	});
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	  
	  
}]);

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
			$state.go("admin.model.list");
		});
	}
}]);



app.controller('AddProductCtrl', ['$scope', '$modalInstance','$stateParams', '$rootScope','restService', function ($scope, $modalInstance,$stateParams, $rootScope,restService) {

	$scope.modelId = $stateParams.id;
	
	$scope.middle = {};
	$scope.middle.data = {id: "adf", dattt: "test"};
	
	restService.all("model").customGET( $scope.modelId).then(function(data){
		$scope.model= data.originalElement;
	});
	  $scope.close = function () {
	    $modalInstance.close($scope.middle.data);
	  };
	  
	  
}]);
