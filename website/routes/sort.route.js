const sortRoute = require('express').Router();
const sortController = require('../controllers/sort.controller');

// get sort algorithm page
sortRoute.get('/', sortController.getSortPage);

module.exports = sortRoute;
