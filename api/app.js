var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(objRequest, objResponse, next){
    objResponse.header('Access-Control-Allow-Origin', '*');
    objResponse.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type');
    objResponse.header('AAccess-Control-Expose-Headers', 'Location, Content-Disposition');
    objResponse.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, HEAD, OPTIONS');

    next();
});

routes(app);

var server = app.listen(3000, () =>{
	console.log('app running');
});
