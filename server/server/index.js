//引入http
let http = require('http');

//引入端口号
let { HTTP_POST } = require('../consts');

module.exports = app => {
	//适配端口号
	let httpPort = +process.argv[2] || HTTP_POST;

	//http服务
	http.createServer(app)
		.listen(httpPort, () => {
			console.log('http port listen at' + httpPort)
		})
}