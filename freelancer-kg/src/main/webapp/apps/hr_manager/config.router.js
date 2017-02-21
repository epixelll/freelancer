'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/hr_manager/staff/list');
          $stateProvider
              .state('hr_manager', {
                  abstract: true,
                  url: '/hr_manager',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              //staff
               .state('hr_manager.staff', {
                  abstract: true,
                  url: '/staff',
                  template: '<ui-view/>',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(['../../apps/hr_manager/staff/controller.js']);
                      }]
                    }
              })
              .state('hr_manager.staff.list', {
                  url: '/list',
                  templateUrl: '../../apps/hr_manager/staff/list.html',
              })
              .state('hr_manager.staff.add', {
                  url: '/add',
                  templateUrl: '../../apps/hr_manager/staff/add.html',
              })
              .state('hr_manager.staff.edit', {
                  url: '/edit/:id',
                  templateUrl: '../../apps/hr_manager/staff/edit.html',

              })
      }
    ]
  );
