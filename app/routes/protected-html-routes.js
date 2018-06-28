// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var protectedController = require('../controllers/protectedController.js');

// Routes
// =============================================================
module.exports = function(app, models) {

    app.get('/layouts/main.handlebar', isLoggedIn, protectedController.dashboard);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()){
            return next();

        res.redirect('/signup');

        }

        else{
        res.redirect('/signin');
        }
    }

};