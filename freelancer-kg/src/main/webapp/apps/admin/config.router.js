'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/admin/model/list');
          $stateProvider
              .state('admin', {
                  abstract: true,
                  url: '/admin',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              //model
               .state('admin.model', {
                  abstract: true,
                  url: '/model',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/admin/model/controller.js']);
                      }]
                    }
              })
              .state('admin.model.list', {
                  url: '/list',
                  templateUrl: '../../apps/admin/model/list.html',
              })
              .state('admin.model.add', {
                  url: '/add/:id',
                  templateUrl: '../../apps/admin/model/add.html',
              })
              .state('admin.model.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/admin/model/edit.html',

              })
              
              //warehouse
               .state('admin.warehouse', {
                  abstract: true,
                  url: '/warehouse',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/admin/warehouse/controller.js']);
                      }]
                    }
              })
              .state('admin.warehouse.list', {
                  url: '/list',
                  templateUrl: '../../apps/admin/warehouse/list.html',
              })
              .state('admin.warehouse.add', {
                  url: '/add',
                  templateUrl: '../../apps/admin/warehouse/add.html',
              })
              .state('admin.warehouse.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/admin/warehouse/edit.html',

              })
              
              //order
               .state('admin.order', {
                  abstract: true,
                  url: '/order',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/admin/order/controller.js']);
                      }]
                    }
              })
              .state('admin.order.list', {
                  url: '/list',
                  templateUrl: '../../apps/admin/order/list.html',
              })
              .state('admin.order.add', {
                  url: '/add',
                  templateUrl: '../../apps/admin/order/add.html',
              })
              .state('admin.order.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/admin/order/edit.html',

              })
              
              //staff
               .state('admin.staff', {
                  abstract: true,
                  url: '/staff',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/admin/staff/controller.js']);
                      }]
                    }
              })
              .state('admin.staff.list', {
                  url: '/list',
                  templateUrl: '../../apps/admin/staff/list.html',
              })
              .state('admin.staff.add', {
                  url: '/add',
                  templateUrl: '../../apps/admin/staff/add.html',
              })
              .state('admin.staff.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/admin/staff/edit.html',

              })
              
              
              //user
               .state('admin.user', {
                  abstract: true,
                  url: '/user',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/admin/user/controller.js']);
                      }]
                    }
              })
              .state('admin.user.list', {
                  url: '/list',
                  templateUrl: '../../apps/admin/user/list.html',
              })
              .state('admin.user.add', {
                  url: '/add',
                  templateUrl: '../../apps/admin/user/add.html',
              })
              .state('admin.user.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/admin/user/edit.html',

              })
              
              //setting
               .state('admin.setting', {
                  abstract: true,
                  url: '/setting',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/admin/setting/controller.js']);
                      }]
                    }
              })
              .state('admin.setting.sizeList', {
                  url: '/sizeList',
                  templateUrl: '../../apps/admin/setting/sizeList.html',
              })
              .state('admin.setting.sizeAdd', {
                  url: '/sizeAdd',
                  templateUrl: '../../apps/admin/setting/sizeAdd.html',
              })
              .state('admin.setting.sizeEdit', {
                  url: '/sizeEdit/:id',
                  templateUrl: '../../apps/admin/setting/sizeEdit.html',
              })
              .state('admin.setting.colorList', {
                  url: '/colorList',
                  templateUrl: '../../apps/admin/setting/colorList.html',
              })
              .state('admin.setting.colorAdd', {
                  url: '/colorAdd',
                  templateUrl: '../../apps/admin/setting/colorAdd.html',
              })
              .state('admin.setting.colorEdit', {
                  url: '/colorEdit/:id',
                  templateUrl: '../../apps/admin/setting/colorEdit.html',
              })
      }
    ]
  );
