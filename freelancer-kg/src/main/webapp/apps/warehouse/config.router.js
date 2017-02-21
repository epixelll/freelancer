'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/warehouse/fabric/list');
          $stateProvider
              .state('warehouse', {	
                  abstract: true,
                  url: '/warehouse',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              // fabric
              .state('warehouse.fabric', {
                  abstract: true,
                  url: '/fabric',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/warehouse/fabric/controller.js']);
                      }]
                    }
              })
              .state('warehouse.fabric.list', {
                  url: '/list',
                  templateUrl: '../../apps/warehouse/fabric/list.html',
              })
              .state('warehouse.fabric.add', {
                  url: '/add',
                  templateUrl: '../../apps/warehouse/fabric/add.html',
              })
              .state('warehouse.fabric.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/warehouse/fabric/edit.html',

              })
              
              .state('warehouse.accessory_category', {
                  abstract: true,
                  url: '/accessory_category',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/warehouse/accessory_category/controller.js']);
                      }]
                    }
              })
              .state('warehouse.accessory_category.list', {
                  url: '/list',
                  templateUrl: '../../apps/warehouse/accessory_category/list.html',
              })
              .state('warehouse.accessory_category.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/warehouse/accessory_category/edit.html',

              })
              
              .state('warehouse.accessory', {
                  abstract: true,
                  url: '/accessory',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/warehouse/accessory/controller.js']);
                      }]
                    }
              })
              .state('warehouse.accessory.list', {
                  url: '/list',
                  templateUrl: '../../apps/warehouse/accessory/list.html',
              })
              .state('warehouse.accessory.add', {
                  url: '/add',
                  templateUrl: '../../apps/warehouse/accessory/add.html',
              })
              .state('warehouse.accessory.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/warehouse/accessory/edit.html',

              })
              //service_category
               .state('warehouse.service_category', {
                  abstract: true,
                  url: '/service_category',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/warehouse/service_category/controller.js']);
                      }]
                    }
              })
              .state('warehouse.service_category.list', {
                  url: '/list',
                  templateUrl: '../../apps/warehouse/service_category/list.html',
              })
              .state('warehouse.service_category.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/warehouse/service_category/edit.html',

              })
              //service
              .state('warehouse.service', {
                  abstract: true,
                  url: '/service',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/warehouse/service/controller.js']);
                      }]
                    }
              })
              .state('warehouse.service.list', {
                  url: '/list',
                  templateUrl: '../../apps/warehouse/service/list.html',
              })
              .state('warehouse.service.add', {
                  url: '/add',
                  templateUrl: '../../apps/warehouse/service/add.html',
              })
              .state('warehouse.service.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/warehouse/service/edit.html',

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
              .state('warehouse.supply.list', {
                  url: '/list',
                  templateUrl: '../../apps/warehouse/supply/list.html',
              })
              .state('warehouse.supply.add', {
                  url: '/add',
                  templateUrl: '../../apps/warehouse/supply/add.html',
              })
              .state('warehouse.supply.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/warehouse/supply/edit.html',

              })

      }
    ]
  );
