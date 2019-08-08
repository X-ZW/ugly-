let { collection, end } = require('../db');

module.exports = (req, res) => {
	collection('personalinfo', res, (coll, client) => {
		coll
			.find()
			.toArray((err, data) => {
				if (err) {
					return end({
						err: 1,
						data: "查询失败"
					}, res, client)
				}
				end({
					err: 0,
					data: data
				}, res, client)
			})
	})
}