/**
 * Created by matthias on 6/16/14.
 */
angular.module('appDirectives', []).

    directive('appVersion', function (version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }).

    directive('shapeshift', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                $(element).shapeshift(scope.$eval(attrs.shapeshift));
            }
        };
    })

;