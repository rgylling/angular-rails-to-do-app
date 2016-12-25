
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
                         });
            };

            vm.editList = function (listId, list) {
              ListFactory.editList(listId, list)
                         .then(function success(response){
                           vm.getLists();
                          });
            };

            vm.lists = vm.getLists()

            function setList(data) {
              vm.lists = data;
              console.log("getting list")
            }

            vm.handleCreate = function(){
              console.log(vm.list)
              vm.createList(vm.list);
            }

            vm.handleEdit = function(listId,list){
              console.log(listId)
              vm.editList(listId, list);
            }


        }])
}())
