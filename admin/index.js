const app = require('express')()

// This is the admin server
// It will be accessible at
// http://<app server url>/admin/<app url>
// This will happen post authentication
// So your app doesn't have to worry about that


function init() {
	// Initialize the admin routes
	// require('./routes')(app);
}

module.exports = { app, init }