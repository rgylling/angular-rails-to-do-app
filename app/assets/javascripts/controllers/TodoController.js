
(function() {
    'use strict'

    angular
        .module('todoApp')
        .controller('TodoController',['TodoFactory', '$stateParams', function(TodoFactory, $stateParams) {
            var vm = this
            var listId = $stateParams.id;

            vm.test = "Testing todos"

            TodoFactory.getList(listId)
                       .then(setList)
            function setList(data) {
              vm.list = data
              console.log("still getting it")
            }

            vm.addTodo = function () {
              console.log("added")
            }

        }])
}())
