'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/embroidery/order/list');
          $stateProvider
              .state('embroidery', {
                  abstract: true,
                  url: '/embroidery',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              //staff
               .state('embroidery.order', {
                  abstract: true,
                  url: '/order',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/embroidery/order/controller.js']);
                      }]
                    }
              })
              .state('embroidery.order.list', {
                  url: '/list',
                  templateUrl: '../../apps/embroidery/order/list.html',
              })
              .state('embroidery.order.list_order', {
                  url: '/list_order/:id',
                  templateUrl: '../../apps/embroidery/order/list_order.html',
              })
              .state('embroidery.order.add', {
                  url: '/add/:id',
                  templateUrl: '../../apps/embroidery/order/add.html',
              })
              .state('embroidery.order.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/embroidery/order/edit.html',

              })
              .state('embroidery.deffective', {
                  abstract: true,
                  url: '/deffective',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/embroidery/deffective/controller.js']);
                      }]
                    }
              })
              .state('embroidery.deffective.list', {
                  url: '/list',
                  templateUrl: '../../apps/embroidery/deffective/list.html',
              })
              .state('embroidery.deffective.add', {
                  url: '/add',
                  templateUrl: '../../apps/emproidery/deffective/add.html',
              })
              .state('embroidery.deffective.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/embroidery/deffective/edit.html',

              })
      }
    ]
  );
