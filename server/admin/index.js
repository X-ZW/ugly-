let { Router } = require('express');

//引入登录
let login = require('./login');
let register = require('./register');
let checkusername = require('./checkusername');
let checkpassword = require('./checkpassword');
let changepassword = require('./changepassword');
let personalinfo = require('./personalinfo');
let addinfo = require('./addinfo');
let changepersonalinfo = require('./changepersonalinfo');


let router = new Router();

module.exports = router
	.get('/personalinfo', personalinfo)
	.post('/login', login)
	.post('/register', register)
	.post('/checkusername', checkusername)
	.post('/checkOldPassword', checkpassword)
	.post('/changepassword', changepassword)
	.post('/addinfo', addinfo)
	.post('/changepersonalinfo', changepersonalinfo)