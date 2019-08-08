//引入数据库模块
let { collection, end } = require('../db');


module.exports = (req, res) => {
	console.log(req.body.password)
	collection('userinfo', res, (coll, client) => {
		coll
			.updateMany(
				{ username: req.body.username},
				{ $set: { password: req.body.password } },
				(err, data) => {
					console.log(data.result)
					if(err) {
						return end({
							err: 1,
							data: "更新数据库失败"
						}, res, client)
					}
					if (data.result.n > 0) {
						//删除session中的用户名
						return end({
							err: 0,
							data: "更新成功"
						}, res, client)
					}
					end({
						err: 2,
						data: "没有更新成功"
					}, res, client)
				}
			)
	})
}