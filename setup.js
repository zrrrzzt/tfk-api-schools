'use strict';

var mongojs = require('mongojs');
var config = require('./config');
var db = mongojs(config.DB);
var schools = db.collection('schools');
var schoolsDocument = require('./test/data/school.json');
var textIndexFields = {
  "school": "text",
  "address": "text",
  "city": "text",
  "municipality": "text",
  "category": "text"
};

function handleCallback(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}

function addDocument(options, callback) {
  var collection = db.collection(options.collection);

  collection.insert(options.document, function(err, data){
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, data);
    }
  });
}

db.createCollection('schools', handleCallback);

schools.ensureIndex(textIndexFields, {"default_language": "nb"}, function(err, data){
  if (err) {
    console.error(err);
  } else {
    console.log(data)
  }
});

addDocument({collection:'schools', document:schoolsDocument}, handleCallback);