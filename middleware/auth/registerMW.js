const requireOption = require("../requireOption").requireOption;

 module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');
    return function (req, res, next) {
        if((typeof req.body.username === 'undefined') ||
            (typeof req.body.password === 'undefined')){
                return next();
            }
            return UserModel.findOne({username: req.body.username}, (err, user) => {
                if(err){
                    return next(err);
                }
                if(user !== null)
                {
                    res.locals.errorText = 'Username / email already taken!';
                    return next();
                }else{
                    const newUser = new UserModel();
                    newUser.username = req.body.username;
                    newUser.password = req.body.password;
                    return newUser.save(next);
                }
            })
    };
};