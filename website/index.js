const express = require('express');
const app = express();
const path = require('path');
const homeRoute = require('./routes/home.route');
const sortRoute = require('./routes/sort.route');
const https = require('https');

// set port
const PORT = process.env.PORT || 3333;

// set static file
app.use(express.static(path.join(__dirname, 'public')));

// set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// set up cookie, body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', homeRoute);
app.use('/algorithm/sort', sortRoute);

// Auto wake up heroku
/* 

app.get('/apis/wakeup-heroku', (req, res) => res.send('ok'));
const timer = 10 * 60 * 1000; // 10 minutes
setInterval(() => {
	https.get('https://dyno-visualizer.herokuapp.com/apis/wakeup-heroku');
}, timer);

*/

// =============== LISTENING ================= //
app.listen(PORT, () => {
	console.log(`SERVER IS STARTING ON PORT ${PORT}`);
});
