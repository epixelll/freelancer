'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/manager/model/list');
          $stateProvider
              .state('manager', {
                  abstract: true,
                  url: '/manager',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              //model
               .state('manager.model', {
                  abstract: true,
                  url: '/model',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/manager/model/controller.js']);
                      }]
                    }
              })
              .state('manager.model.list', {
                  url: '/list',
                  templateUrl: '../../apps/manager/model/list.html',
              })
              .state('manager.model.add', {
                  url: '/add',
                  templateUrl: '../../apps/manager/model/add.html',
              })
              .state('manager.model.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/manager/model/edit.html',
              })
              .state('manager.model.modalSeason', {
                  url: '/modalSeason/:id',
                  templateUrl: '../../apps/manager/model/modalSeason.html',
              })
              .state('manager.model.modalAgeCategory', {
                  url: '/modalAgeCategory/:id',
                  templateUrl: '../../apps/manager/model/modalAgeCategory.html',
              })
              .state('manager.model.modalClassification', {
                  url: '/modalClassification/:id',
                  templateUrl: '../../apps/manager/model/modalClassification.html',
              })
              
              //warehouse
               .state('manager.warehouse', {
                  abstract: true,
                  url: '/warehouse',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/manager/warehouse/controller.js']);
                      }]
                    }
              })
              .state('manager.warehouse.list', {
                  url: '/list',
                  templateUrl: '../../apps/manager/warehouse/list.html',
              })
              .state('manager.warehouse.add', {
                  url: '/add',
                  templateUrl: '../../apps/manager/warehouse/add.html',
              })
              .state('manager.warehouse.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/manager/warehouse/edit.html',

              })
              
              //order
               .state('manager.order', {
                  abstract: true,
                  url: '/order',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/manager/order/controller.js']);
                      }]
                    }
              })
              .state('manager.order.list', {
                  url: '/list',
                  templateUrl: '../../apps/manager/order/list.html',
              })
              .state('manager.order.add', {
                  url: '/add',
                  templateUrl: '../../apps/manager/order/add.html',
              })
              .state('manager.order.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/manager/order/edit.html',

              })
              
              //staff
               .state('manager.staff', {
                  abstract: true,
                  url: '/staff',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/manager/staff/controller.js']);
                      }]
                    }
              })
              .state('manager.staff.list', {
                  url: '/list',
                  templateUrl: '../../apps/manager/staff/list.html',
              })
              .state('manager.staff.add', {
                  url: '/add',
                  templateUrl: '../../apps/manager/staff/add.html',
              })
              .state('manager.staff.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/manager/staff/edit.html',

              })
              
              
              //accountant
               .state('manager.accountant', {
                  abstract: true,
                  url: '/accountant',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/manager/accountant/controller.js']);
                      }]
                    }
              })
              .state('manager.accountant.list', {
                  url: '/list',
                  templateUrl: '../../apps/manager/accountant/list.html',
              })
              .state('manager.accountant.add', {
                  url: '/add',
                  templateUrl: '../../apps/manager/accountant/add.html',
              })
              .state('manager.accountant.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/manager/accountant/edit.html',

              })
              
              //clients
               .state('manager.clients', {
                  abstract: true,
                  url: '/clients',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/manager/clients/controller.js']);
                      }]
                    }
              })
              .state('manager.clients.list', {
                  url: '/list',
                  templateUrl: '../../apps/manager/clients/list.html',
              })
              .state('manager.clients.add', {
                  url: '/add',
                  templateUrl: '../../apps/manager/clients/add.html',
              })
              .state('manager.clients.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/manager/clients/edit.html',

              })
             
              
              
               //report
               .state('manager.report', {
                  abstract: true,
                  url: '/report',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/manager/report/controller.js']);
                      }]
                    }
              })
              .state('manager.report.list', {
                  url: '/list',
                  templateUrl: '../../apps/manager/report/list.html',
              })
              .state('manager.report.add', {
                  url: '/add',
                  templateUrl: '../../apps/manager/report/add.html',
              })
              .state('manager.report.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/manager/report/edit.html',

              })
      }
    ]
  );





