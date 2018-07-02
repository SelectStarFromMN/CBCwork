//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, profile) {

    var Profile = profile;
    var LocalStrategy = require('passport-local').Strategy;


    passport.serializeUser(function (profile, done) {
        done(null, profile.userName);
    });


    // used to deserialize the user
    passport.deserializeUser(function (userName, done) {
        Profile.findById(userName).then(function (profile) {
            if (profile) {
                done(null, profile.get());
            } else {
                done(profile.errors, null);
            }
        });

    });


    passport.use('local-signup', new LocalStrategy(

        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {

            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            Profile.findOne({
                where: {
                    email: email
                }
            }).then((profile) => {

                if (profile) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        userName: req.body.username,
                        email: email,
                        password: userPassword,
                        firstName: req.body.firstname,
                        lastName: req.body.lastname
                    };


                    Profile.create(data).then((newProfile, created) => {
                        if (!newProfile) {
                            return done(null, false);
                        }

                        if (newProfile) {
                            return done(null, newProfile);

                        }


                    });
                }


            });



        }



    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({

            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback

        },

        function (req, email, password, done) {

            var Profile = profile;

            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            Profile.findOne({
                where: {
                    email: email
                }
            }).then(function (profile) {

                if (!profile) {
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }

                if (!isValidPassword(profile.userName, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }

                var profileinfo = profile.get();

                console.log(profileinfo);

                return done(null, profileinfo);

            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });


            });

        }
    ));

}