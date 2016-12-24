
(function() {
    'use strict'

    angular
        .module('todoApp')
        .controller('TodoController',['ListFactory', function(ListFactory) {
            var vm = this
            vm.test = "Testing todos"

            // ListFactory.getLists()
            //            .then(setLists)
            // function setLists(data) {
            //   vm.lists = data
            //   console.log(data)
            // }
        }])
}())
