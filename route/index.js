const renderMW = require("../middleware/renderMW");

module.exports = function(app) {
    const objRepo = {};

    app.use("/",
        renderMW(objRepo, 'index')
    );

};
