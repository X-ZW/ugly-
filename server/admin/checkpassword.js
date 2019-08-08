//引入数据库模块
let { collection, end } = require('../db');

module.exports = (req, res) => {
	console.log(req.body)
	collection('userinfo', res, (coll, client) => {
		coll
			.findOne(req.body,(err, data) => {
				console.log(data);
				if(err) {
					return end({
						err: 1,
						data: "检测密码失败，checkpassword"
					}, res, client)
				}
				if(data) {
					return end({
						err: 0,
						data: "密码正确"
					}, res, client)
				}
				end({
					err: 2,
					data: "密码错误"
				}, res, client)
			})
	})

}