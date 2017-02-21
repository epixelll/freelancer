'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/testing/order/list');
          $stateProvider
              .state('testing', {
                  abstract: true,
                  url: '/testing',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              //staff
               .state('testing.order', {
                  abstract: true,
                  url: '/order',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/testing/order/controller.js']);
                      }]
                    }
              })
              .state('testing.order.list', {
                  url: '/list',
                  templateUrl: '../../apps/testing/order/list.html',
              })
              .state('testing.order.list_order', {
                  url: '/list_order/:id',
                  templateUrl: '../../apps/testing/order/list_order.html',
              })
              .state('testing.order.add', {
                  url: '/add/:id',
                  templateUrl: '../../apps/testing/order/add.html',
              })
              .state('testing.order.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/testing/order/edit.html',

              })
              .state('testing.deffective', {
                  abstract: true,
                  url: '/deffective',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/testing/deffective/controller.js']);
                      }]
                    }
              })
              .state('testing.deffective.list', {
                  url: '/list',
                  templateUrl: '../../apps/testing/deffective/list.html',
              })
              .state('testing.deffective.add', {
                  url: '/add',
                  templateUrl: '../../apps/testing/deffective/add.html',
              })
              .state('testing.deffective.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/testing/deffective/edit.html',

              })
      }
    ]
  );
