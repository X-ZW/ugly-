//引入数据库模块
let { collection, end } = require('../db');

module.exports = (req, res) => {
	console.log(req.body)
	collection("userinfo", res, (coll, client) => {
		coll
			.findOne(req.body, (err, data) => {
				console.log(data)
				if (err) {
					return end({
						err: 1,
						data: "登录查询报错"
					}, res, client)
				}
				if (!data) {
					return end({
						err: 2,
						data: "用户名密码错误"
					}, res, client)
				}
				end({
					err: 0,
					data: "登录成功",
					username: req.body.username
				}, res, client)
			})
	})
}