//引入登录注册中间件
let admin = require('../admin');
let page = require('../page');
module.exports = app => {
	app.use(admin)
	app.use(page)
}