/**
 * Created by matthias on 6/16/14.
 */
angular.module('IndexApp', [
    'ngRoute'
// Don't forget, all those controllers and services, etc need to be linked to as .js in the index file of the angular frontend app

    ,'appServices' // main angular services
    ,'appServiceData' // the angular service to write data
    ,'appServiceNotes'// the angular service to write notes


    ,'appControl' // main angular controls
    ,'appControlData'
    ,'appControlNotes'

    ,'appDirectives' // main angular directives
    ,'appFilters'

    ,'appRoutes'

    ]);