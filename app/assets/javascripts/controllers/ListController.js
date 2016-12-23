
(function() {
    'use strict'

    angular
        .module('todoApp')
        .controller('ListController',['ListFactory' function(ListFactory) {
            var vm = this
            vm.test = "Testing"

            ListFactory.getLists()
                       .then(setLists)
            function setLists(data) {
              vm.lists = data
              console.log(data)
            }
        }])
}())
