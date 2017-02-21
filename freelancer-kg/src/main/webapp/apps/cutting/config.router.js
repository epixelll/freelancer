'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/cutting/order/list');
          $stateProvider
              .state('cutting', {
                  abstract: true,
                  url: '/cutting',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              //staff
               .state('cutting.order', {
                  abstract: true,
                  url: '/order',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/cutting/order/controller.js']);
                      }]
                    }
              })
              .state('cutting.order.list', {
                  url: '/list',
                  templateUrl: '../../apps/cutting/order/list.html',
              })
              .state('cutting.order.list_order', {
                  url: '/list_order/:id',
                  templateUrl: '../../apps/cutting/order/list_order.html',
              })
              .state('cutting.order.add', {
                  url: '/add/:id',
                  templateUrl: '../../apps/cutting/order/add.html',
              })
              .state('cutting.order.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/cutting/order/edit.html',

              })
              .state('cutting.deffective', {
                  abstract: true,
                  url: '/deffective',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/cutting/deffective/controller.js']);
                      }]
                    }
              })
              .state('cutting.deffective.list', {
                  url: '/list',
                  templateUrl: '../../apps/cutting/deffective/list.html',
              })
              .state('cutting.deffective.add', {
                  url: '/add',
                  templateUrl: '../../apps/cutting/deffective/add.html',
              })
              .state('cutting.deffective.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/cutting/deffective/edit.html',

              })
      }
    ]
  );
