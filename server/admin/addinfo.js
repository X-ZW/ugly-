//引入数据库模块
let { collection, end } = require('../db');

module.exports = (req, res) => {
	console.log(req.body);
	collection('personalinfo', res, (coll, client) => {
		coll
			.insertOne(req.body, (err, data) => {
				console.log(data)
				if (err) {
					return end({
						err: 1,
						data: "个人信息插入数据库错误"
					}, res, client)
				}
				if (data.result.n > 0) {
					return end({
						err: 0,
						data: '个人信息插入成功'
					}, res, client)
				}
				end({
					err: 1,
					data: "数据没有插入成功"
				}, res, client)
			})
	})
}