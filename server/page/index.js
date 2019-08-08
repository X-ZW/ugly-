let { Router } = require('express');

let router = new Router();

let admin = require('./admin')

module.exports = router
	.get('/', admin)