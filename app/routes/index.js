var Data = require('../models/index.js'); //require('./app/model/index');
var Notes = require('../models/notes.js');

module.exports = function(app, passport) {

    // server routes
    // handle things like api calls
    // authentication routes

    // api routes
    // get all data
    app.get('/api/data', isLoggedIn, function(req, res) {

        // use mongoose to get all data in the database
        Data.find(function(err, data) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(data); // return all data in JSON format
        });
    });

    // create data
    app.post('/api/data', isLoggedIn, function(req, res) {
        // create data


        Data.create({
            title : req.body.title,
            content : req.body.content,
            creator: req.user.local.email,
            done : false
        }, function(err, data) {
            if (err)
                res.send(err);

            // get and return all the data after you create another
            Data.find(function(err, data) {
                if (err)
                    res.send(err);
                res.json(data);
            });
        });

    });

    // delete data
    app.delete('/api/data/:data_id', isLoggedIn, function(req, res) {
        Data.remove({
            _id : req.params.data_id
        }, function(err, data) {
            if (err)
                res.send(err);

            // get and return all the data after you create another
            Data.find(function(err, data) {
                if (err)
                    res.send(err);
                res.json(data);
            });
        });
    });

    // these are the $http angular requests to get, post and delete notes data to /api/notes, req coming from appServiceNotes.js
    // communication back via json ..

    app.get('/api/notes', isLoggedIn, function(req, res){
        Notes.find(function(err, notes){

            if (err)
                res.send(err);

            res.json(notes);
        });

    });


    app.post('/api/notes', function(req, res){
        Notes.create({
            title : req.body.title,
            content : req.body.content,
            done : false

        }, function(err, notes){
            if (err)
                res.send(err);


            Notes.find(function(err, notes){

                if (err)
                    res.send(err);

                res.json(notes);
            })

        })

    });

    app.delete('/api/notes/:notes_id',function(req, res){
        Notes.remove({
            _id : req.params.notes_id       // Need to better understand this ..
        },
        function(err, notes){
            if (err)
                res.send(err);
            Notes.find(function(err, notes){
                if (err)
                    res.send(err);
                res.json(notes);
            })
        }
        )

    });


    // frontend routes
    // route to handle all angular requests

    app.get('/register', function(req, res) {
        res.sendfile('./public/index.html', { // we let angular handle this, otherwise we would need ./public/register.html
            message: req.flash('registerMessage')
        });
    });

    app.post('/register', passport.authenticate('local-register', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/register', // redirect back to the register page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/login', function(req, res) {
        res.sendfile('./public/index.html', { // we let angular handle this, otherwise we would need ./public/login.html
            message: req.flash('loginMessage')
        });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the login page if there is an error
        failureFlash : true // allow flash messages
    }));


    app.get('/profile', isLoggedIn, function(req, res) {
        res.sendfile('./public/index.html', { // we let angular handle this, otherwise we would need ./public/profile.html
            user : req.user
        });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
/*
    app.get('/notes', function(req, res) {
        res.sendfile('./public/index.html', {
            user : req.user
        });
    });

*/
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html', {
            user : req.user
        });
    });





};

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/403.html');
}
