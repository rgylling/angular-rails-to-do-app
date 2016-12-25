
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
                         .then(function (data){
                           setList(data)
              });
            };


            vm.createTodo = function (listId, todo) {
              TodoFactory.createTodo(listId, todo)
                         .then(function success(response){
                           vm.getList(listId);
                           vm.todo = '';
                         });
            };


            vm.editTodo = function (listId, todo, todoId) {
              TodoFactory.editTodo(listId, todo, todoId)
                         .then(function success(response){
                           vm.getList(listId);
                           vm.todo = '';
                          });
            };

            vm.deleteTodo = function (listId, todoId) {
              TodoFactory.deleteTodo(listId, todoId)
                         .then(function success(response){
                           vm.getList(listId);
                           vm.todo = '';
                          });
            };


            vm.list = vm.getList(listId)

            function setList(data) {
              vm.list = data;
              console.log("getting list")
            }

            vm.toggleComplete = function (todo, todoId){
              if (todo.complete === false) {
                todo.complete = true;
              } else {
                todo.complete = false;
              }

              vm.editTodo(listId, todo, todoId)

            }

            vm.handleCreate = function(){
              vm.createTodo(listId, vm.todo);
            }
            vm.handleEdit = function(todo,todoId){
              console.log(todoId)
              vm.editTodo(listId, todo, todoId);
            }
            vm.handleDelete = function(id){
              vm.deleteTodo(listId, id);
            }

        }])
}())
