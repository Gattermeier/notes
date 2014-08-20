/**
 * Created by matthias on 6/22/14.
 */
var mongoose = require('mongoose');

// define the schema for the notes model
/*
var notesSchema = mongoose.Schema({
    note            : {
        title       : String,
        content     : String,
        link        : String,
        tags        : String,
        done        : Boolean
    }
});

module.exports = mongoose.model('Notes', notesSchema);
*/
// OR maybe without defining a schema?

module.exports = mongoose.model('Notes', {
    title       : String,
    content     : String,
    link        : String,
    tags        : String,
    done        : Boolean
});


