/**
 * Created by matthias on 6/16/14.
 */
angular.module('appFilters', []).
    filter('interpolate', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    });