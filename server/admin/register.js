//引入数据库模块
let { collection, end } = require('../db');

module.exports = (req, res) => {
	collection('userinfo', res, (coll, client) => {
		coll
			.insertOne(req.body, (err, data) => {
				console.log(data)
				if (err) {
					return end({
						err: 1,
						data: "注册插入数据失败"
					}, res, client)
				}
				if (data.result.n > 0) {
					return end({ err: 0, data: "注册插入数据成功"}, res, client)
				}
				end({
					err: 1,
					data: "注册没有数据"
				}, res, client)
			})
	})
	// res.send('success')
}