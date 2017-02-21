'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/technologist/order/list');
          $stateProvider
              .state('technologist', {
                  abstract: true,
                  url: '/technologist',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              //staff
               .state('technologist.order', {
                  abstract: true,
                  url: '/order',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/technologist/order/controller.js']);
                      }]
                    }
              })
              .state('technologist.order.list', {
                  url: '/list',
                  templateUrl: '../../apps/technologist/order/list.html',
              })
              .state('technologist.order.list_order', {
                  url: '/list_order/:id',
                  templateUrl: '../../apps/technologist/order/list_order.html',
              })
              .state('technologist.order.add', {
                  url: '/add/:id',
                  templateUrl: '../../apps/technologist/order/add.html',
              })
              .state('technologist.order.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/technologist/order/edit.html',

              })
              .state('technologist.deffective', {
                  abstract: true,
                  url: '/deffective',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/technologist/deffective/controller.js']);
                      }]
                    }
              })
              .state('technologist.deffective.list', {
                  url: '/list',
                  templateUrl: '../../apps/technologist/deffective/list.html',
              })
              .state('technologist.deffective.add', {
                  url: '/add',
                  templateUrl: '../../apps/technologist/deffective/add.html',
              })
              .state('technologist.deffective.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/technologist/deffective/edit.html',

              })
      }
    ]
  );
