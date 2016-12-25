
(function() {
    'use strict'

    angular
        .module('todoApp')
        .controller('TodoController',['TodoFactory', '$stateParams', function(TodoFactory, $stateParams) {
            var vm = this
            var listId = $stateParams.id;
            vm.todo = { id: null, todo_list_id: listId, description: '', complete: false };

            vm.getList = function(listId) {
              TodoFactory.getList(listId)
                         .then(setList)
              function setList(data) {
                vm.list = data
                console.log("still getting it")
              }
          }


            vm.createTodo = function (listId, todo) {
              TodoFactory.createTodo(listId, todo)
                         .then(vm.getList(listId))
            }


            vm.getList(listId)

            vm.handleCreate = function(){
              vm.createTodo(listId, vm.todo);
            }

        }])
}())
