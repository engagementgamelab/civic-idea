/**
 * APP NAME
 * Developed by Engagement Lab, 2017
 * ==============
 * App boot logic
 *
 * @static
 * @author Johnny Richardson
 *
 * ==========
 */

// Return server object
serverStart = function() {

	return require('express')();

};

// Any custom app initialization logic should go here
appStart = function(app) {

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
*/
};

module.exports = function(frameworkDir, shared) {

	// Added web sdk dependencies 
	require('app-module-path').addPath(frameworkDir + '/node_modules');
	
	// Obtain app root path and set as keystone's module root
	var appRootPath = require('app-root-path').path;
	var keystoneInst = require('keystone');	
	keystoneInst.set('module root', appRootPath);
	keystoneInst.set('wysiwyg additional buttons', 'blockquote');

	return { 

		keystone: keystoneInst,
		server: serverStart,
		start: appStart	

	}

};