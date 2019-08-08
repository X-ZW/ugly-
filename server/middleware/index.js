//引入express 
let express = require('express');
let path = require('path');
//引入ejs
let ejs = require('ejs');
//session
let session = require('express-session');
//body-parser
let bodyParser = require('body-parser');

module.exports = app => {
	ejs.delimiter = '$';
	// 配置ejs
	app.engine('.html', ejs.__express);
	app.set('view engine', 'ejs');


	app.use(session({
		secret: 'xzw',
		resave: true,
		saveUninitialized: false
	}))

	app.use(bodyParser.json());
	app.use("/build/", express.static(path.join(process.cwd(), '/build/')));
	app.use("/static/css/", express.static(path.join(process.cwd(), '/build/static/css')));
	app.use("/static/js/", express.static(path.join(process.cwd(), '/build/static/js')));
	app.use('/service-worker.js', express.static(path.join(process.cwd(), '/build/service-worker.js')));
	app.use('/manifest.json', express.static(path.join(process.cwd(), '/build/manifest.json')));
	app.use('/favicon.ico', express.static(path.join(process.cwd(), '/favicon.ico')))
}
