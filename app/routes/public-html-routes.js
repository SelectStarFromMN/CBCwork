// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var publicController = require('../controllers/publicController.js');

// Routes
// =============================================================
module.exports = function(app, models) {

    app.get('/', publicController.home);
    
};