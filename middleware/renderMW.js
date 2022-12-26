/**
 * Renders the page with the data fetched by other middlewares.
 */
const requireOption = require('./requireOption');
const getMetaData = require('../config/metadata');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        res.locals.metadata = getMetaData();
        res.render(viewName, res.locals);
    };
};
