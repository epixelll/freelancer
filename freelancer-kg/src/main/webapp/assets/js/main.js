'use strict';

/* Controllers */

angular.module('app')
  .controller('AppCtrl', ['$scope', 'localStorageService', '$window', '$state',  '$modal', 'restService', 
    function(              $scope,  localStorageService,   $window, $state, $modal, restService) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');
      
      
      
      //my datepicker options. With this options, we can use same data everywhere
  	  $scope.commondatepicker = {};
  	  $scope.commondatepicker.open = function($event, opened) {
  	    $event.preventDefault();
  	    $event.stopPropagation();

  	    $scope.commondatepicker[opened] = true;
  	  };
  	  
  	  $scope.commondatepicker.format = 'dd/MM/yyyy';

  	  $scope.commondatepicker.dateOptions = {
  	    formatYear: 'yy',
  	    startingDay: 1,
  	    language: 'ru'
  	  };  
      
  	  
  	  //call modal for every delete
  	  $scope.callDeleteModal = function(deletepath, id){
		var modalInstance = $modal.open({
		      templateUrl: '../../assets/tpl/blocks/deleteModal.html',
		      controller: 'DeleteModalCtrl',
		      size: 'sm'
		    });

		    modalInstance.result.then(function (selectedItem) {
		    	restService.one(deletepath).customGET("delete/" + id).then(function(data){
		    		alert("Успешно удален!");
		    		$state.reload();
		    	});
		    }, function () {
		      return;
		    });
	},
      
	//call info modal
	  $scope.callInfoModal = function(infopath, id){
		var modalInstance = $modal.open({
		      templateUrl: '../../assets/tpl/blocks/infoModal.html',
		      controller: 'InfoModalCtrl',
		      size: 'sm',
		      resolve: {
		    	    path: function () {
		    	        return infopath;
		    	    },

		    	    id: function () {
		    	        return id;
		    	    }
		    	}
		    });

		    modalInstance.result.then(function (selectedItem) {
		    	
		    }, function () {
		      return;
		    });
	},
	
	//call season modal
	  $scope.callSeasonModal = function(seasonpath, id){
		var modalInstance = $modal.open({
		      templateUrl: '../../assets/tpl/blocks/seasonModal.html',
		      controller: 'SeasonModalCtrl',
		      size: 'sm',
		      resolve: {
		    	    path: function () {
		    	        return seasonpath;
		    	    },

		    	    id: function () {
		    	        return id;
		    	    }
		    	}
		    });

		    modalInstance.result.then(function (selectedItem) {
		    	
		    }, function () {
		      return;
		    });
	},
	
	//call ageCategory modal
	  $scope.callAgeCategoryModal = function(ageCategorypath, id){
		var modalInstance = $modal.open({
		      templateUrl: '../../assets/tpl/blocks/ageCategoryModal.html',
		      controller: 'AgeCategoryModalCtrl',
		      size: 'sm',
		      resolve: {
		    	    path: function () {
		    	        return ageCategorypath;
		    	    },

		    	    id: function () {
		    	        return id;
		    	    }
		    	}
		    });

		    modalInstance.result.then(function (selectedItem) {
		    	
		    }, function () {
		      return;
		    });
	},

	//call classification modal
	  $scope.callClassificationModal = function(classificationpath, id){
		var modalInstance = $modal.open({
		      templateUrl: '../../assets/tpl/blocks/classificationModal.html',
		      controller: 'ClassificationModalCtrl',
		      size: 'sm',
		      resolve: {
		    	    path: function () {
		    	        return classificationpath;
		    	    },

		    	    id: function () {
		    	        return id;
		    	    }
		    	}
		    });

		    modalInstance.result.then(function (selectedItem) {
		    	
		    }, function () {
		      return;
		    });
	},

	
      // config
      $scope.app = {
        name: 'Barbulak',
        version: '1.0',
        // for chart colors
        color: {
          primary: '#7266ba',
          info:    '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
        },
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-success',
          navbarCollapseColor: 'bg-success',
          asideColor: 'bg-black',
          headerFixed: true,
          asideFixed: true,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      }

      // save settings to local storage
      if ( angular.isDefined(localStorageService.get("settings")) && localStorageService.get("settings") != null) {
        $scope.app.settings = localStorageService.get("settings");
      } else {
    	  localStorageService.set('settings', $scope.app.settings);
      }
      $scope.$watch('app.settings', function(){
        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // save to local storage
        localStorageService.set('settings', $scope.app.settings);
      }, true);


      function isSmartDevice( $window )
      {
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

  }])
  
  .controller('DeleteModalCtrl', ['$scope', '$modalInstance', '$rootScope', function ($scope, $modalInstance, $rootScope) {

	  $scope.ok = function () {
	    $modalInstance.close('ok');
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	  
	  
}])
.controller('InfoModalCtrl', ['$scope', '$modalInstance', '$rootScope', 'path', 'id', 'restService', function ($scope, $modalInstance, $rootScope, path, id, restService) {
	
	restService.all(path).customGET( id).then(function(data){
		$scope.entity= data.originalElement;
	});
	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	  
	  $scope.type= path;
	  
	  
}])
 .controller('ProfileCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

	 $scope.update = function(){
	    	restService.all("change_password").customPOST({"username": $scope.username, "current_p" : $scope.current_p, "new_p" : $scope.new_p},  "security_change_password").then(function(data){
	    		alert("Ваш пароль успешно изменен!");
	    	});
	    	
	    }
}])


;
