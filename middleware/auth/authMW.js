const requireOption = require("../requireOption").requireOption;

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.session.user_id === 'undefined'){
            return res.redirect('/');
        }
        return next();
    };
};