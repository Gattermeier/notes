/**
 * Created by Matthias Gattermeier
 * A learning by doing seed for the MEAN stack
 * Started: 6/16/14.
 */


// MODULES

var express     = require('express');
var app         = express();

var mongoose    = require('mongoose'); // for the database
var logger      = require('morgan'); //
var cookieParser = require('cookie-parser');
var bodyParser  = require('body-parser');
var passport    = require('passport'); // authentication
var flash 	    = require('connect-flash'); // authentication
var session     = require('express-session'); // authentication

    // MCV(R) Structure

var routes      = require('./app/routes');
var models       = require('./app/models');
var controller  = require('./app/controller');
var views       = require('./app/views');



    // CONFIGURATION

var db      = require('./config/db');
var port    = process.env.PORT || 8000;
mongoose.connect(db.url);

require('./config/passport')(passport);

app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));

app.use(session({ secret: "whatasupersavesecret"})); // authentication //, name: 'sid', cookie: { secure: true }
app.use(passport.initialize()); // authentication
app.use(passport.session()); // authentication - persistent login sessions
app.use(flash()); // authentication

    // ROUTES

require('./app/routes/index.js')(app, passport);


/*var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
    app.use(express.errorHandler());
}

// production only
if (env === 'production') {
    // do stuff
}*/



    // EXECUTE

console.log('App running on 127.0.0.1:' + port);
//module.exports = app;

//app.set('port', process.env.PORT || 3000);
//app.listen(app.get('port'));
app.listen(port);
