
(function() {
    'use strict'

    angular
        .module('todoApp')
        .controller('ListController',['ListFactory', '$stateParams', function(ListFactory, $stateParams) {
            var vm = this
            var listId = $stateParams.id;
            console.log(listId)

            vm.test = "Testing"

            ListFactory.getLists()
                       .then(setLists)
            function setLists(data) {
              vm.lists = data

            }


        }])
}())
