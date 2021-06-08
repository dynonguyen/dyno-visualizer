const sortRoute = require('express').Router();
const sortController = require('../controllers/sort.controller');

// get sort algorithm page
sortRoute.get('/visualizer', sortController.getSortPage);
sortRoute.get('/realtime', sortController.getSortRealtimePage);

module.exports = sortRoute;
