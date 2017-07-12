'use strict'
const api = require('express').Router()
const db = require('../db');
var path = require('path');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))
api.get("/hi",(req,res) => res.send("I am here"))
api.get("/hihi",(req,res) => console.log("path", path))
api.use('/', require('./routes'));
// api.getValue = function (path) {
//       return api.get(path);
//   };


/*
 This middleware will catch any URLs resembling a file extension
 for example: .js, .html, .css
 This allows for proper 404s instead of the wildcard '/*' catching
 URLs that bypass express.static because the given file does not exist.
 */
api.use(function (req, res, next) {

    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }

});

api.get('/*', function (req, res) {
    res.sendFile(api.get('indexHTMLPath'));
});

// Error catching endware.
api.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});


module.exports = api