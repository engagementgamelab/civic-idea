/**
 * (App name here)
 * Developed by Engagement Lab, 2018
 * ==============
 * Routing controller.
 *
 *
 * @author 
 *
 * ==========
 */

var express = require('express');
var router = express.Router();
var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('render', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
    api: importRoutes('./api')
};

// Setup Route Bindings 
// CORS
 router.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, HEAD, PUT');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method");
    
    if(req.method === 'OPTIONS')
        res.send(200);
    else
        next();

});

// /keystone redirect
router.all('/admin', function(req, res, next) {
    res.redirect('/keystone');
});

// Views
// router.get('/', routes.views.index);
router.get('/api/modules/get', keystone.middleware.api, routes.api.modules.get);

module.exports = router;
