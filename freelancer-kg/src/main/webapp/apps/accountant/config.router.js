'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/accountant/debt/list');
          $stateProvider
              .state('accountant', {
                  abstract: true,
                  url: '/accountant',
                  templateUrl: '../../assets/tpl/app.html'
              })
              
              //debt
              .state('accountant.debt', {
                 abstract: true,
                 url: '/debt',
                 template: '<ui-view/>',
                 resolve: {
                     deps: ['$ocLazyLoad',
                       function( $ocLazyLoad ){
                         return $ocLazyLoad.load(['../../apps/accountant/debt/controller.js']);
                     }]
                   }
             })
             .state('accountant.debt.list', {
                 url: '/list',
                 templateUrl: '../../apps/accountant/debt/list.html',
             })
             .state('accountant.debt.add', {
                 url: '/add',
                 templateUrl: '../../apps/accountant/debt/add.html',
             })
             .state('accountant.debt.edit', {
                 url: '/edit/:id',
                 templateUrl: '../../apps/accountant/debt/edit.html',

             })
             
             //operations
             .state('accountant.operations', {
                abstract: true,
                url: '/operations',
                template: '<ui-view/>',
                resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['../../apps/accountant/operations/controller.js']);
                    }]
                  }
            })
            .state('accountant.operations.list', {
                url: '/list',
                templateUrl: '../../apps/accountant/operations/list.html',
            })
            .state('accountant.operations.add', {
                url: '/add',
                templateUrl: '../../apps/accountant/operations/add.html',
            })
            .state('accountant.operations.edit', {
                url: '/edit/:id',
                templateUrl: '../../apps/accountant/operations/edit.html',

            })
            
            //salary
            .state('accountant.salary', {
               abstract: true,
               url: '/salary',
               template: '<ui-view/>',
               resolve: {
                   deps: ['$ocLazyLoad',
                     function( $ocLazyLoad ){
                       return $ocLazyLoad.load(['../../apps/accountant/salary/controller.js']);
                   }]
                 }
           })
           .state('accountant.salary.list', {
               url: '/list',
               templateUrl: '../../apps/accountant/salary/list.html',
           })
           .state('accountant.salary.add', {
               url: '/add',
               templateUrl: '../../apps/accountant/salary/add.html',
           })
           .state('accountant.salary.edit', {
               url: '/edit/:id',
               templateUrl: '../../apps/accountant/salary/edit.html',

           })
           
           ///cashbox
           .state('accountant.cashbox', {
              abstract: true,
              url: '/cashbox',
              template: '<ui-view/>',
              resolve: {
                  deps: ['$ocLazyLoad',
                    function( $ocLazyLoad ){
                      return $ocLazyLoad.load(['../../apps/accountant/cashbox/controller.js']);
                  }]
                }
          })
          .state('accountant.cashbox.list', {
              url: '/list',
              templateUrl: '../../apps/accountant/cashbox/list.html',
          })
          .state('accountant.cashbox.add', {
              url: '/add',
              templateUrl: '../../apps/accountant/cashbox/add.html',
          })
          .state('accountant.cashbox.edit', {
              url: '/edit/:id',
              templateUrl: '../../apps/accountant/cashbox/edit.html',

          })
          
              
      }
    ]
  );
