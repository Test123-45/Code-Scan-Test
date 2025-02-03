var express = require('express');
var serveStatic = require('serve-static');
var app = require('./controller/app.js');

var port = 8081;

app.use((req, res, next) => {
    if (req.url.endsWith('.appref-ms')) {
        return res.status(403).send('Access Forbidden');
    }
    next();
});

app.use(serveStatic(__dirname + '/public')); 

var server = app.listen(port, function(){
    console.log('Web App Hosted at http://localhost:%s', port);
});

var app = require('./controller/app.js');
