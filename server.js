'use strict';

var Hapi = require('hapi');
var config = require('./config');
var server = new Hapi.Server();
var schoolService = require('./index');

server.connection({
  port:config.SERVER_PORT,
  routes:{cors:{credentials:true}}
});

server.register([
  {
    register: schoolService,
    options: {}
  }
], function(err) {
  if (err) {
    console.error('Failed to load a plugin:', err);
  }
});

function startServer() {
  server.start(function() {
    console.log('Server running at:', server.info.uri);
  });
}

function stopServer() {
  server.stop(function() {
    console.log('Server stopped');
  });
}

module.exports.start = startServer;

module.exports.stop =  stopServer;