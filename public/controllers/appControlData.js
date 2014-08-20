/**
 * Created by matthias on 6/22/14.
 */

angular.module('appControlData', [])
    .controller('dataCtrl', function($scope, $http, Data) {
        $scope.debuginfo ="Data Controller";
        $scope.formData = {};
        $scope.loading = true;

        // GET =====================================================================
        // when landing on the page, get all data and show them
        // use the service to get all the data
        Data.get()
            .success(function(data) {
                $scope.data = data;
                $scope.loading = false;
            });

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createData = function() {
            $scope.loading = true;

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            if ($scope.formData.title != undefined) {

                // call the create function from our service (returns a promise object)
                Data.create($scope.formData)

                    // if successful creation, call our get function to get all the new data
                    .success(function(data) {
                        $scope.loading = false;
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.data = data; // assign our new list of data
                    });
            }
        };

        // DELETE ==================================================================
        // delete data after checking it
        $scope.deleteData = function(id) {
            $scope.loading = true;
            Data.delete(id)
                // if successful creation, call our get function to get all the new data
                .success(function(data) {
                    $scope.loading = false;
                    $scope.data = data; // assign our new list of data
                });
        };
    })
;