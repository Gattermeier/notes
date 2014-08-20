/**
 * Created by matthias on 6/22/14.
 */

angular.module('appServiceNotes', [])

    .factory('Notes', function($http) {
        return {
            get : function() {
                return $http.get('/api/notes'); // this calls the server side controller where .get etc needs to be defined accordingly ..
            },
            create : function(Notes) {
                return $http.post('/api/notes', Notes);
            },
            delete : function(id) {
                return $http.delete('/api/notes/', + id);
            }
        }
    });