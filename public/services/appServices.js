/**
 * Created by matthias on 6/16/14.
 */
angular.module('appServices', []).
    value('version', '0.1');
/**
 * Created by matthias on 6/16/14.
 */

/*
angular.module('appServiceData', [])

    .factory('Data', function($http) {
        return {
            get : function() {
                return $http.get('/api/data');
            },
            create : function(Data) {
                return $http.post('/api/data', Data);
            },
            delete : function(id) {
                return $http.delete('/api/data/' + id);
            }
        }
    });

angular.module('appServiceNotes', [])

    .factory('Notes', function($http) {
        return {

            get: function () {
                return $http.get('/api/notes'); // this calls the server side controller where .get etc needs to be defined accordingly ..
            },
            create: function (Notes) {
                return $http.post('/api/notes', Notes);
            },
            delete: function (id) {
                return $http.delete('/api/notes', id);
            }
        }
    });*/