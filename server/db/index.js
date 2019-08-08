//引入mongodb
let { MongoClient, ObjectId } = require('mongodb');
//引入配置
let { MONGO_URL } = require('../consts');

//返回信息并关闭数据库
function end(data, res, client) {
	res.json(data);
	client.close()
}

//操作集合的方法
function collection(collectionName, res, callback) {
	MongoClient.connect(MONGO_URL, {useNewUrlParser: true} ,(err, client) => {
		// console.log(db)
		if(err) {
			return end({
				error: 1,
				data: '数据库连接错误'
			}, res ,client)
		}
		var db = client.db("xzw_react3");
		//选定集合
		var coll = db.collection(collectionName);
		// console.log(coll);
		callback(coll, client, res)
	})
}

module.exports = { collection, end, ObjectId }