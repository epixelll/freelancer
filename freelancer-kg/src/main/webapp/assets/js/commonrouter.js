'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
    	
//          $urlRouterProvider
//              //.otherwise('/admin/product/list');
          $stateProvider
	          .state('common', {
	              abstract: true,
	              url: '/common',
	              templateUrl: '../../assets/tpl/app.html'
	          })
              .state('common.profile', {
                  url: '/profile',
                  templateUrl: '../../assets/tpl/blocks/page_profile.html'
              })           
              
              
      }
    ]
  )
  
  
  ;
