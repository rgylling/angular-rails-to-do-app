
(function() {
    'use strict'

    angular
        .module('todoApp')
        .factory('TodoFactory', ['$http', function($http) {
            return {
              getList: getList,
            }

            function getList(id) {
                return $http.get('/todo_lists/' + id)
                            .then(handleResponse)
                            .catch(handleError)
            }


            function handleResponse(response) {
                console.log(response.data)
                if (response.status === 200) return response.data

            }

            function handleError(error) {
                console.log("There was an error this http request: ", error)
            }
        }])
}())
