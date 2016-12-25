(function () {
  'use strict'

  angular
      .module('todoApp', ['ui.router', 'templates'])

      .config([
          "$httpProvider", function($httpProvider) {
              $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
          }
      ])      

      .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
          $stateProvider
              .state('home', {
                  url: '/',
                  templateUrl: 'home.html',
              })
              .state('lists', {
                  url: '/lists',
                  templateUrl: 'list.html',
                  controller: 'ListController as vm'
              })

              .state('todolist', {
                  url: '/lists/:id',
                  templateUrl: 'todolist.html',
                  controller: 'TodoController as vm'
              })


          $urlRouterProvider.otherwise('/')
          $locationProvider.html5Mode(true);
      })


}())
