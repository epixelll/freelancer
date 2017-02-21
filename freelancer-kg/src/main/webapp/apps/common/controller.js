'use strict';

/* Controllers */
	

app.controller('NewBrandModalCtrl', ['$scope', '$modalInstance', '$rootScope', '$translate', function ($scope, $modalInstance, $rootScope, $translate) {
	$scope.brand = {};
	  $scope.create = function(){
	    	restService.one("brand").customPOST($scope.brand, "create").then(function(data){
	    		alert("Успешно создано!");
	    
	    		 $modalInstance.close('ok');
	    	});
	    };
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	  
	  
}]);



