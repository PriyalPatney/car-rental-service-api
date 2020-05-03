module.exports = {
    isAuthed: (req, res, next) => {
        if (req.isAuthenticated()) {         //the passport feature checks if there is a user in the session
            next();
        } else {
            res.redirect('/login');
        }
    },
    hasRole: (role) => (req, res, next) => {      //we check that there are roles in the logged in user
        if (req.isAuthenticated() &&
            req.user.roles.indexOf(role) > -1) {
            next();
        } else {
            res.redirect('/login');
        }
    }
}