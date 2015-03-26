'use strict';

var mongojs = require('mongojs');
var helpers = require('../helpers');
var config = require('../config');
var db = mongojs(config.DB);
var schools = db.collection('schools');

function getSchool(request, reply) {
  var id = mongojs.ObjectId(request.params.schoolId);
  schools.find({_id: id}, function(err, data) {
    helpers.handleReply(err, data, request, reply);
  });
}

function getSchools(request, reply) {
  var skipNum = request.query.skip ? parseInt(request.query.skip, 10):0;
  var limitNum = request.query.limit ? parseInt(request.query.limit, 10):20;
  schools.find({}).skip(skipNum).limit(limitNum, function(err, data) {
    helpers.handleReply(err, data, request, reply);
  });
}

function getSchoolsByMunicipality(request, reply) {
  schools.find({'municipality':request.params.name}, function(err, data) {
    helpers.handleReply(err, data, request, reply);
  });
}

function getSchoolsByCategory(request, reply) {
  schools.find({'category':request.params.category}, function(err, data) {
    helpers.handleReply(err, data, request, reply);
  });
}

function searchSchools(request, reply) {
  schools.find({'$text':{'$search':request.params.searchText}}, function(err, data) {
    helpers.handleReply(err, data, request, reply);
  });
}

module.exports.getSchool = getSchool;

module.exports.getSchools = getSchools;

module.exports.getSchoolsByMunicipality = getSchoolsByMunicipality;

module.exports.getSchoolsByCategory = getSchoolsByCategory;

module.exports.searchSchools = searchSchools;