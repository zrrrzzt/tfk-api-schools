'use strict';

var handlers = require('../handlers');
var routes = [
  {
    method: 'GET',
    path: '/schools',
    handler: handlers.getSchools
  },
  {
    method: 'GET',
    path: '/schools/search/{searchText}',
    handler: handlers.searchSchools
  },
  {
    method: 'GET',
    path: '/schools/municipality/{name}',
    handler: handlers.getSchoolsByMunicipality
  },
  {
    method: 'GET',
    path: '/schools/category/{category}',
    handler: handlers.getSchoolsByCategory
  },
  {
    method: 'GET',
    path: '/school/{schoolId}',
    handler: handlers.getSchool
  },
];

module.exports = routes;