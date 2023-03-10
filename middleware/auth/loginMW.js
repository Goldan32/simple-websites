const requireOption = require("../requireOption").requireOption;

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');

    return function (req, res, next) {
        if ((typeof req.body.username === 'undefined')
         || (typeof req.body.password === 'undefined')) {
            return next();
        }
        return UserModel.findOne({
            username: req.body.username,
            password: req.body.password
        }, (err, user) => {
            if (err) {
                return next(err);
            }

            if (user === null) {
                res.locals.errorText = 'No user found.';
                return next();
            }
            if (user.password !== req.body.password) {
                res.locals.errorText = 'Wrong password.';
                return next();
            } else {
                req.session.user_id = user._id;
                return req.session.save(err => {
                    if (err) {
                        return next(err);
                    }
                    return res.redirect('/login');
                });
            }
        });
    }
}
