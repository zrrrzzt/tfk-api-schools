'use strict';

var wreck = require('supertest');
var server = require('../server');
var config = require('../config');

wreck = wreck('http://localhost:' + config.SERVER_PORT);

describe('schools', function() {

  before(function() {
    server.start();
  });

  after(function() {
    server.stop();
  });

  describe('GET /schools', function() {
    it('responds with json', function(done) {
      wreck
        .get('/schools')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /school/550be6a59cf8030608f4abc8', function() {
    it('responds with json', function(done) {
      wreck
        .get('/school/550be6a59cf8030608f4abc8')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /schools/search/Notodden', function() {
    it('responds with json', function(done) {
      wreck
        .get('/schools/search/Notodden')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /schools/category/Grunnskole', function() {
    it('responds with json', function(done) {
      wreck
        .get('/schools/category/Grunnskole')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /schools/municipality/Skien', function() {
    it('responds with json', function(done) {
      wreck
        .get('/schools/municipality/Skien')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

});