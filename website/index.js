const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const homeRoute = require('./routes/home.route');
const sortRoute = require('./routes/sort.route');

// set port
const PORT = process.env.PORT || 3000;

// set static file
app.use(express.static(path.join(__dirname, 'public')));

// set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// set up cookie, body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/', homeRoute);
app.use('/algorithm/sort', sortRoute);

// =============== LISTENING ================= //
app.listen(PORT, () => {
	console.log(`SERVER IS STARTING ON PORT ${PORT}`);
});
