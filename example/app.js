
/**
 * Module dependencies.
 */

var express = require('express')
  , api = require('./api')
  , http = require('http')
  , path = require('path')
  , swagger = require('../');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(swagger.init(app, {
    // Base path of the API
    basePath: 'http://localhost:3000',
    // Folder prefix
    prefix : '/doc',
    // Files containing swagger specs
    apis: ['./api.js'],
    apiVersion : '0.1',
    // Infos to be displayed
    info : {
      title : 'Assemblage',
      description : 'API interface documentation',
      contact : 'strzelewicz.alexandre@gmail.com'
    }
  }));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  res.render('index', { title: 'Express' });
});

app.get('/login/:das', function(req, res, next) {
  res.send({success:true});
});
app.post('/login/:test', api.login);
app.post('/register', api.register);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
