
(function() {
    'use strict'

    angular
        .module('todoApp')
        .controller('ListController',['ListFactory', '$stateParams', function(ListFactory, $stateParams) {
            var vm = this
            var listId = $stateParams.id;

            vm.test = "Testing"

            ListFactory.getLists()
                       .then(setLists)
            function setLists(data) {
              vm.lists = data

            }

            ListFactory.getList(listId)
                       .then(setList)
            function setList(data) {
              vm.list = data

            }

            vm.addTodo = function () {
              console.log("added")
            }
        }])
}())
