'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/modeling/model/list');
          $stateProvider
              .state('modeling', {
                  abstract: true,
                  url: '/modeling',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              //staff
               .state('modeling.model', {
                  abstract: true,
                  url: '/model',
                  template: '<ui-view/>',

               	  resolve: {
                   deps: ['$ocLazyLoad',
                     function( $ocLazyLoad ){
                 	  return $ocLazyLoad.load('ui.select').then(
                           function(){
                        	   return $ocLazyLoad.load(['../../apps/modeling/model/controller.js']);
                           }
                       );
                       
                   }]
                 }
              })
              //supply
              .state('warehouse.supply', {
                  abstract: true,
                  url: '/supply',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                    	  return $ocLazyLoad.load('ui.select').then(
                              function(){
                            	  return $ocLazyLoad.load(['../../apps/warehouse/supply/controller.js']);
                              }
                          );
                          
                      }]
                    }
              })
              .state('modeling.model.list', {
                  url: '/list',
                  templateUrl: '../../apps/modeling/model/list.html',
              })
              .state('modeling.model.add', {
                  url: '/add',
                  templateUrl: '../../apps/modeling/model/add.html',
              })
              .state('modeling.model.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/modeling/model/edit.html',

              })



              .state('modeling.types_of_raw_materials', {
                  abstract: true,
                  url: '/types_of_raw_materials',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                          function( $ocLazyLoad ){
                              return $ocLazyLoad.load(['../../apps/modeling/types_of_raw_materials/controller.js']);
                          }]
                  }
              })
              .state('modeling.types_of_raw_materials.product_list', {
                  url: '/product_list',
                  templateUrl: '../../apps/modeling/types_of_raw_materials/product_list.html',
              })
              .state('modeling.types_of_raw_materials.fabric_list', {
                  url: '/fabric_list',
                  templateUrl: '../../apps/modeling/types_of_raw_materials/fabric_list.html',
              })
              .state('modeling.types_of_raw_materials.accessories_list', {
                  url: '/accessories_list',
                  templateUrl: '../../apps/modeling/types_of_raw_materials/accessories_list.html',

              })
              
               //service_category
               .state('modeling.service_category', {
                  abstract: true,
                  url: '/service_category',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/modeling/service_category/controller.js']);
                      }]
                    }
              })
              .state('modeling.service_category.list', {
                  url: '/list',
                  templateUrl: '../../apps/modeling/service_category/list.html',
              })
              .state('modeling.service_category.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/modeling/service_category/edit.html',

              })
              //service
              .state('modeling.service', {
                  abstract: true,
                  url: '/service',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/modeling/service/controller.js']);
                      }]
                    }
              })
              .state('modeling.service.list', {
                  url: '/list',
                  templateUrl: '../../apps/modeling/service/list.html',
              })
              .state('modeling.service.add', {
                  url: '/add',
                  templateUrl: '../../apps/modeling/service/add.html',
              })
              .state('modeling.service.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/modeling/service/edit.html',

              })
              
               .state('modeling.classification', {
                  abstract: true,
                  url: '/classification',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/modeling/classification/controller.js']);
                      }]
                    }
              })
              .state('modeling.classification.list', {
                  url: '/list',
                  templateUrl: '../../apps/modeling/classification/list.html',
              })
              .state('modeling.classification.add', {
                  url: '/add',
                  templateUrl: '../../apps/modeling/classification/add.html',
              })
              .state('modeling.classification.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/modeling/classification/edit.html',

              })
      }
    ]
  );
