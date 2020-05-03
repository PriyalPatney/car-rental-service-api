const passport = require('passport');
const LocalPassport = require('passport-local');
const User = require('mongoose').model('User');

module.exports = () => {                                                  //checks by username and password that the given user exists
    passport.use(new LocalPassport((username, password, done) => {
        User.findOne({ username: username }).then(user => {
            if (!user) return done(null, false);
            if (!user.authenticate(password)) return done(null, false);
            return done(null, user);
        });
    }));

    passport.serializeUser((user, done) => {                              //returns the ID of the user submitted
        if (user) return done(null, user._id);
    });

    passport.deserializeUser((id, done) => {                             //returns the user by the submitted ID
        User.findById(id).then(user => {
            if (!user) return done(null, false);
            return done(null, user);        
        });
    });
};