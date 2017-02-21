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
	$scope.model.photo = {};
	$scope.model.ingrFabricModelList = [];
	$scope.model.ingrAccessoryModelList = [];
	$scope.accessory_category = {};
	$scope.colors = [];
	$scope.sizes = [];
//	$scope.colors = [{"id":1,"name":"dfasdf","code":"asdfsad"},{"id":2,"name":"asdfdsf","code" :"fdsfsd"},{"id":3,"name":"green","code":"ggg"}];
	 
	/*	$scope.model.photos = {};*/

	
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
/////////////////////////// --- Fabric and Accessory Ingredient Part --- ////////////////////////////////	
	$scope.ingrFabricModel = {};	
	$scope.ingrAccessoryModel = {};	
	
	$scope.addTextileIngred = function(){
		if(!$scope.ingrFabricModel.fabric || !$scope.ingrFabricModel.amount){
			alert("Заполните все поля");
			return;
		}
		var found = false;
		var mainIsAdded = false;
		angular.forEach($scope.model.ingrFabricModelList, function(value){
			if(value.fabric.id == $scope.ingrFabricModel.fabric.id) found = true;
			if(value.isMain) mainIsAdded = true;
		});
		if(found){
			alert("Ткань уже есть в составе");
		}else if(mainIsAdded && $scope.ingrFabricModel.isMain){
			alert("Основной ткань уже добавлено");
		}else{
			$scope.model.ingrFabricModelList.push(angular.copy($scope.ingrFabricModel));
			$scope.ingrFabricModel = {};
		}
	}
	$scope.removeTextileIngred = function(fabricId){
		angular.forEach($scope.model.ingrFabricModelList, function(value, key){
			if(value.fabric.id == fabricId) $scope.model.ingrFabricModelList.splice(key, 1);
		});
	}
	
	$scope.addAccessoryIngred = function(){
		if(!$scope.ingrAccessoryModel.accessory || !$scope.ingrAccessoryModel.amount){
			alert("Заполните все поля");
			return;
		}
		var found = false;
		angular.forEach($scope.model.ingrAccessoryModelList, function(value){
			if(value.accessory.id == $scope.ingrAccessoryModel.accessory.id) found = true;
		});
		if(found){
			alert("Аксесуар уже есть в составе");
		}else{
			$scope.model.ingrAccessoryModelList.push(angular.copy($scope.ingrAccessoryModel));
			$scope.ingrAccessoryModel = {};
		}
	}
	$scope.removeAccessoryIngred = function(accessoryId){
		angular.forEach($scope.model.ingrAccessoryModelList, function(value, key){
			if(value.accessory.id == accessoryId) $scope.model.ingrAccessoryModelList.splice(key, 1);
		});
	}
	
///////////////////////////////////////////////////////////
	
	
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

	restService.all("photo").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.photos = data.originalElement.resultList;
	});
	
	restService.all("color").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.colors = data.originalElement.resultList;
	});
	
	restService.all("size").customPOST( {startIndex: 0, resultQuantity: 1000}, "list" ).then(function(data){
		$scope.sizes= data.originalElement.resultList;
	});
	
	restService.all("fabric").customPOST( {startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.fabrics= data.originalElement.resultList;
	});
	restService.all("accessory").customPOST( {startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.accessories= data.originalElement.resultList;
	});

    restService.all("accessory_category").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.accessory_categories = data.originalElement.resultList;
	});
    
	/* restService.all("photos").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
	 $scope.photoses = data.originalElement.resultList;
	 });*/

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

