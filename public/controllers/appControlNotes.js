/**
 * Created by matthias on 6/22/14.
 */

angular.module('appControlNotes', [])
    .controller('notesCtrl', function($scope, $http, Notes) {
        $scope.debuginfo = "Notes Controller";
        $scope.formData = {};
        $scope.loading = true;

        Notes.get().success(function(notes){ // this needs to be defined as angular service in appServiceNotes
            $scope.notes = notes; // that is our list of notes we need to display via angular like ng-repeat > notes in notes
            $scope.loading = false;
            });

        $scope.createNote = function() {
            $scope.loading = true;
            if ($scope.formData.content != undefined) {
                Notes.create($scope.formData)// this needs to be defined as a angular service
                    .success(function(notes){
                       $scope.loading = false;
                       $scope.formData = {}; // empty the data in the form just saved to the db table
                       $scope.notes = notes;// reassign list of notes
                    });
            } else { $scope.loading = false; }
        };
        $scope.deleteNote = function(id) {
            $scope.loading = true;
            Notes.delete(id) // this we need to define as angular service
                .success(function(notes){
                    $scope.laoding = false;
                    $scope.notes = notes; // reassign the new list in memory to display the notes without the deleted one
                })
        }
    });

