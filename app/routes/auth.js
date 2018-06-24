var authController = require('../controllers/authController.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/logout', authController.logout);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }));

}






