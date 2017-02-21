// config

var app =  
angular.module('app')
	.run(['Restangular', '$location', '$window', function(Restangular, $location, $window) {
	    Restangular.setBaseUrl('/enesai-textile/rest');
	    
	    Restangular.setErrorInterceptor(
	            function(response) {
	                if (response.status == 405) {
	                    alert(response.data.message);
	//                    $window.location.href='/login';
	                }
	                if (response.status == 401) {
	                    alert("You are not authenticated");
	                    $location.path("/enesai-textile/login.html");
	                }
	                if (response.status == 403) {
	                    alert("You are not authorized");
	                }
	                if (response.status == 301 || response.status == 302) {
	                    alert("You are being redirected");
	                    if(response.redirect){
	                    	$window.location.href=response.redirect;
	                    }
	                }
	            }
	        );
	    	 
	    Restangular.setResponseExtractor(function (response, operation, what, url) {
	            response.originalElement = angular.copy(response);
	//            $rootScope.requestElement = null;
	            return response;		
	        });	
  }])
  
  .run(['$rootScope', '$state', '$stateParams', '$rootScope', 'localStorageService', 'Restangular', '$timeout', '$location', 
    function ($rootScope,   $state,   $stateParams, $rootScope, localStorageService, Restangular, $timeout, $location) {
	  //setting up state parameters for template
	  $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;        
      
      //setting up user info for application
      $rootScope.getUserInfo = function() {
 		 var userInfo = null;
 		 if(localStorageService.isSupported) {
 			  userInfo = localStorageService.get("userInfo");
 			  if(userInfo == null || userInfo.id == null){
 				 Restangular.one("security").customGET("current_user").then(function(data){
 					  userInfo = data.originalElement;
 					  localStorageService.set("userInfo", userInfo);
 					  $rootScope.userInfo = userInfo;
 				  });
 			  }
 		 }
 		 else{
 			Restangular.one("security").customGET("current_user").then(function(data){
 				 userInfo = data.originalElement;
 				 $rootScope.userInfo = userInfo;
 			 });
 		 }
 		 $rootScope.userInfo = userInfo;
 		 return userInfo;
      };
      $rootScope.getUserInfo();
      
    //setting up roles for user for application
      $rootScope.getRolesForUser = function() {
 		 var roles = new Array();
 		 if(localStorageService.isSupported) {
 			roles = localStorageService.get("roles");
 			  if(typeof roles == "undefined" || roles == null || roles.length <= 0){
 				 Restangular.one("security").customGET("roles_of_current_user").then(function(data){
 					  roles = data.originalElement;
 					  localStorageService.set("roles", roles);
 					  $rootScope.roles = roles;
 				  });
 			  }
 		 }
 		 else{
 			Restangular.one("security").customGET("roles_of_current_user").then(function(data){
 				roles = data.originalElement;
 				$rootScope.roles = roles;
 			 });
 		 }
 		 $rootScope.roles = roles;
 		 return roles;
      };
      $rootScope.updateRoles = function(){
			if(localStorageService.isSupported) {
	 			localStorageService.remove("roles");
			}
			$rootScope.getRolesForUser();
      }
      $rootScope.getRolesForUser();
      $rootScope.roleMapping = {
    		  "admin": {"russian": "Администратор", "path": "admin" }, 
    		  "manager": {"russian": "Менеджер", "path": "manager" }, 
    		  "accountant": {"russian": "Бухгалтер", "path": "accountant" }, 
    		  "store_manager": {"russian": "Менеджер Склада", "path": "warehouse_manager" }, 
    		  "production_manager": {"russian": "Менеджер производства", "path": "production_manager" }, 
    		  "manager_19": {"russian": "Менеджер 19 bottle", "path": "manager_19_bottle" }, 
      };
      $rootScope.getRoleInRussianFromPath = function(path){
    	  for(var key in $rootScope.roleMapping){
    		  if($rootScope.roleMapping[key].path == path) return $rootScope.roleMapping[key].russian;
    	  }
      }
      
      //logout
      $rootScope.logout = function(){
     	 localStorageService.clearAll();
     	 window.location = "/enesai-textile/logout";
      }
      
      //To show role on top part
      $rootScope.getPathAsRole = function() { 
    	  var baseUrl = $location.absUrl().split("#", 1)[0].split("/");
          return baseUrl[baseUrl.length-2];
      }
  	}
  ])
  .config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', 'localStorageServiceProvider',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide, localStorageServiceProvider) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
        
        
//        localStorageServiceProvider
//	    .setPrefix('')
//	    .setStorageType('sessionStorage')
//	    .setNotify(true, true)
//	    .setStorageCookie(30, '/SchoolManagementSystem/');
    }
  ]);