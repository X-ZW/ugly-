//引入数据库模块
let { collection, end } = require('../db');


module.exports = (req, res) => {
	console.log(req.body)
	collection("userinfo", res, (coll, client) => {
		coll
			.findOne({username: req.body.username}, (err, data) => {
				console.log(err, data)
				if(err) {
					return end({
						err: 1,
						data: "检测用户名失败"
					}, res, client)
				}
				if (data) {
					return end({
						err: 2,
						data: "用户名已经被占用"
					}, res, client)
				}
				end({
					err: 0,
					data: "用户名可用"
				}, res, client)

			})	
	})
}

