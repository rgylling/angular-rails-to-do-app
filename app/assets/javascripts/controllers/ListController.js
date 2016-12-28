
(function() {
    'use strict'

    angular
        .module('todoApp')
        .controller('ListController',['ListFactory', '$stateParams', function(ListFactory, $stateParams) {
            var vm = this
            vm.list = { id: null, name: '' }


            vm.getLists = function() {
              ListFactory.getLists()
                         .then(function (data){
                           setList(data)
              });
            };

            vm.createList = function (list) {
              ListFactory.createList(list)
                         .then(function success(response){
                           vm.getLists();
                           vm.list = { id: null, name: '' }
                         });
            };

            vm.editList = function (listId, list) {
              ListFactory.editList(listId, list)
                         .then(function success(response){
                           vm.getLists();
                          });
            };

            vm.deleteList = function (listId) {
              ListFactory.deleteList(listId)
                         .then(function success(response){
                           vm.getLists();
                          });
            };

            vm.lists = vm.getLists()

            function setList(data) {
              vm.lists = data;
            }

            vm.handleCreate = function(){
              vm.createList(vm.list);
            }

            vm.handleEdit = function(listId,list){
              vm.editList(listId, list);
            }

            vm.handleDelete = function(id){
              vm.deleteList(id);
            }


        }])
}())
