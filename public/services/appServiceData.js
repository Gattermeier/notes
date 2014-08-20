/**
 * Created by matthias on 6/22/14.
 */

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