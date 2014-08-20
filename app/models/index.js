/**
 * Created by matthias on 6/16/14.
 */
var mongoose = require('mongoose');


module.exports = mongoose.model('Data', {
    title       : String,
    content     : String,
    link        : String,
    tags        : String,
    creator     : String,
    done        : Boolean
});
