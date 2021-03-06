// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public'));


// ROUTES FOR OUR API
// =============================================================================
// var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.post('/status', require('./api/status'));
app.get('/auth', require('./api/auth'));

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);

// START THE SERVER
// =============================================================================
var server = app.listen(process.env.PORT || 5001,'0.0.0.0', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});
