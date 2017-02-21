'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/sales/order/list');
          $stateProvider
              .state('sales', {
                  abstract: true,
                  url: '/sales',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              //order
               .state('sales.order', {
                  abstract: true,
                  url: '/order',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/sales/order/controller.js']);
                      }]
                    }
              })
              .state('sales.order.list', {
                  url: '/list',
                  templateUrl: '../../apps/sales/order/list.html',
              })
              .state('sales.order.add', {
                  url: '/add',
                  templateUrl: '../../apps/sales/order/add.html',
              })
              .state('sales.order.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/sales/order/edit.html',

              })
              
              
              //client
               .state('sales.client', {
                  abstract: true,
                  url: '/client',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/sales/client/controller.js']);
                      }]
                    }
              })
              .state('sales.client.list', {
                  url: '/list',
                  templateUrl: '../../apps/sales/client/list.html',
              })
              .state('sales.client.add', {
                  url: '/add',
                  templateUrl: '../../apps/sales/client/add.html',
              })
              .state('sales.client.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/sales/client/edit.html',

              })
              
              //product
               .state('sales.product', {
                  abstract: true,
                  url: '/product',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/sales/product/controller.js']);
                      }]
                    }
              })
              .state('sales.product.list', {
                  url: '/list',
                  templateUrl: '../../apps/sales/product/list.html',
              })
              .state('sales.product.add', {
                  url: '/add',
                  templateUrl: '../../apps/sales/product/add.html',
              })
              .state('sales.product.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/sales/product/edit.html',

              })
              
              //model
               .state('sales.model', {
                  abstract: true,
                  url: '/model',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/sales/model/controller.js']);
                      }]
                    }
              })
              .state('sales.model.list', {
                  url: '/list',
                  templateUrl: '../../apps/sales/model/list.html',
              })
              .state('sales.model.add', {
                  url: '/add',
                  templateUrl: '../../apps/sales/model/add.html',
              })
              .state('sales.model.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/sales/model/edit.html',

              })
      }
    ]
  );
