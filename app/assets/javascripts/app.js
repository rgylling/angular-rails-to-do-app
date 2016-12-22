(function () {
  'use strict'

  angular
      .module('todoApp', ['ui.router', 'templates'])

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


          $urlRouterProvider.otherwise('/')
          $locationProvider.html5Mode(true);
      })


}())
