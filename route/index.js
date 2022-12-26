const renderMW = require("../middleware/renderMW");

const UserModel = require('../models/user');

module.exports = function(app) {
    const objRepo = {
        UserModel: UserModel
    };

    app.use("/",
        renderMW(objRepo, 'index')
    );

};
