'use strict';

var express = require('express');
var app = express();
app.set('trust proxy', true);

app.get('/whoami', function(req, res){
	res.send({
		ipaddress: req.ip,
		language: req.get('Accept-Language').slice(0,5),
		software: /\((.*?)\)/.exec(req.get('User-Agent'))[1]
	})
});

app.listen(8080);