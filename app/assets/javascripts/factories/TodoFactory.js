
(function() {
    'use strict'

    angular
        .module('todoApp')
        .factory('TodoFactory', ['$http', function($http) {
            return {
              getList: getList,
              createTodo: createTodo,
              deleteTodo: deleteTodo
            }



            function getList(id) {
                return $http.get('/todo_lists/' + id)
                            .then(handleResponse)
                            .catch(handleError)
            }

            function createTodo(listId, todo) {
              return $http.post('/todo_lists/' + listId + '/todos/', todo)
                          .then(handleResponse)
                          .catch(handleError)
            }

            function deleteTodo(listId, todoId) {
              return $http.delete('/todo_lists/' + listId + '/todos/' + todoId)
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
