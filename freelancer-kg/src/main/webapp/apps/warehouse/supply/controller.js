'use strict';

/* Controllers */
  // signin controller


app.controller('SupplyListCtrl', ['$scope', 'restService','ngTableParams','Utils','$modal', '$window',
                                  function($scope, restService, ngTableParams,Utils, $modal,$window) {

	

	
	
//	$scope.exportData = function(){
//		   var table = document.getElementById('print').innerHTML;
//		   var myWindow = $window.open('', '', 'width=800, height=600');
//		   myWindow.document.write(table);
//		   myWindow.print();
//	};
//	

  }]);

app.controller('AddSupplyCtrl', ['$scope', 'restService','ngTableParams', 'Utils', function($scope, restService, ngTableParams, Utils){

	$scope.supply = {};
	$scope.supply.warehouse = {};
	$scope.supply.supplyProducts = [];
	$scope.supply.supplyFabrics = [];
	$scope.supply.supplyAccessories = [];
	$scope.supplyProduct = {};
	$scope.supplyProduct.model = {};
	$scope.supplyProduct.model.id=0;
	$scope.supplyAccessory = {};
	$scope.supplyAccessory.accessoryCategory = {};
	$scope.supplyAccessory.accessoryCategory.id=0;
	$scope.supplyFabric = {};
	
	
	
	restService.all("warehouse").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.warehouses = data.originalElement.resultList;
	});
	
	restService.all("model").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.models = data.originalElement.resultList;
		
	});
	restService.all("accessory_category").customPOST({startIndex: 0, resultQuantity: 1000}, "list").then(function(data){
		$scope.accessoryCategories = data.originalElement.resultList;
		
	});
	$scope.addProduct = function(){
		var isExists = false;
		angular.forEach($scope.supply.supplyProducts, function(value,index){

            if(value.product.id == $scope.supplyProduct.product.id
            		&& value.size.id == $scope.supplyProduct.size.id)
            	isExists = true;
        })
        if(isExists){
        	alert("ERROR!!! Already exists!")
        }else{
        	if($scope.supplyProduct.product == null || $scope.supplyProduct.product == null
        			|| $scope.supplyProduct.size == null){
        		alert("select all");
        	} else{
	    		var newObj = {};
	    		newObj.product = $scope.supplyProduct.product;
	    		newObj.product.model = $scope.supplyProduct.model;
	    		newObj.quantity = $scope.supplyProduct.quantity;
	    		newObj.size = $scope.supplyProduct.size;
	    		console.log(newObj);
	    		$scope.supply.supplyProducts.push(newObj);     
	        }
        }
	};
	$scope.addAccessory = function(){
		var isExists = false;
		angular.forEach($scope.supply.supplyAccessories, function(value,index){

            if(value.accessory.id == $scope.supplyAccessory.accessory.id)
            	isExists = true;
        })
        if(isExists){
        	alert("ERROR!!! Already exists!")
        }else{
        	if($scope.supplyAccessory.accessory == null){
        		alert("Select accessory");
        	} else{
	    		var newObj = {};
	    		newObj.accessory = $scope.supplyAccessory.accessory;
	    		newObj.accessory.accessoryCategory = $scope.supplyAccessory.accessoryCategory;
	    		newObj.amount = $scope.supplyAccessory.amount;
	    		console.log(newObj);
	    		$scope.supply.supplyAccessories.push(newObj);     
	        }
        }
	};
	$scope.clearProductQuantity = function(){
		$scope.supplyProduct.quantity=0;
	}
	$scope.clearAccessoryAmount = function(){
		$scope.supplyAccessory.amount=0;
	}
	$scope.clearFabricAmount = function(){
		$scope.supplyFabric.amount=0;
	}
	$scope.$watch('supplyProduct.model.id', function(newValue, oldValue) { 
		if ($scope.supplyProduct.model.id != 0){
			$scope.supplyProduct.product = null;
			$scope.supplyProduct.size = null;
			restService.all("product").customPOST({startIndex: 0, resultQuantity: 1000,searchParameters:{"model.id":$scope.supplyProduct.model.id}}, "list").then(function(data){
				$scope.products = data.originalElement.resultList;
			});
		}
	});
	$scope.$watch('supplyAccessory.accessoryCategory.id', function(newValue, oldValue) { 
		if ($scope.supplyAccessory.accessoryCategory.id != 0){
			$scope.supplyAccessory.accessory = null;
			restService.all("accessory").customPOST({startIndex: 0, resultQuantity: 1000,searchParameters:{"accessoryCategory.id":$scope.supplyAccessory.accessoryCategory.id}}, "list").then(function(data){
				$scope.accessories = data.originalElement.resultList;
			});
		}
	});
	  
    $scope.create = function(){
    	if($scope.supply.isInternal == null) $scope.supply.isInternal=false;
    	if($scope.supply.warehouse.id == null || $scope.supply.warehouse.id == 0){
    		if($scope.warehouses.length > 0){
    			$scope.supply.warehouse.id = $scope.warehouses[0].id;
    		} else {
    			alert("You are not responsible for any warehouse");
    			return;
    		}
    	}
    	restService.one("supply").customPOST($scope.supply, "create").then(function(data){
    		alert("Успешно создано!");
    		$state.go('warehouse.supply.list')
    	});
    };
	
}]);