
(function() {
    'use strict'

    angular
        .module('todoApp')
        .controller('TodoController',['TodoFactory', function(TodoFactory) {
            var vm = this
            vm.test = "Testing todos"

            // TodoFactory.getLists()
            //            .then(setLists)
            // function setLists(data) {
            //   vm.lists = data
            //   console.log(data)
            // }
        }])
}())
