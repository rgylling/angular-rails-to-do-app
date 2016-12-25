
(function() {
    'use strict'

    angular
        .module('todoApp')
        .controller('ListController',['ListFactory', '$stateParams', function(ListFactory, $stateParams) {
            var vm = this
            var listId = $stateParams.id;
            console.log(listId)

            vm.getLists = function() {
              ListFactory.getLists()
                         .then(function (data){
                           setList(data)
              });
            };

            vm.lists = vm.getLists()

            function setList(data) {
              vm.lists = data;
              console.log("getting list")
            }


        }])
}())
