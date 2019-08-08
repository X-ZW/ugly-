let { collection, end } = require('../db');

module.exports = (req, res) => {
	collection('personalinfo', res, (coll, client) => {
		coll
			.updateOne(
				{ num: req.body.num },
				{ $set: req.body },
				(err, data) => {
					console.log(data.result)
					if (err) {
						return end({
							err: 1,
							data: "更新数据失败"
						}, res, client)
					}
					if (data.result.n > 0) {
						return end({
							err: 0,
							data: "个人信息更新成功"
						}, res , client)
					}
					end({
						err: 1,
						data: "个人信息没有更新成功"
					}, res, client)
				}
			)
	})
}