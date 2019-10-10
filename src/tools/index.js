import axios from 'axios';

export function checkUsername(rules, value, cb) {
	var reg = new RegExp(/^\w{2,4}$/);
	if (!reg.test(value)) {
		return cb(new Error(' 用户名是2-4字母数字下划线'))
	}
	cb()
}

export function checkPassworod(rules, value, cb) {
	var reg1 = new RegExp(/^\w{2,4}$/);
	if (!reg1.test(value)) {
		return cb(new Error("密码不对怎么登？？？"))
	}
	cb()
}

export function checkOldPassword(rules, value, cb) {
	var reg1 = new RegExp(/^\w{2,4}$/);
	if (!reg1.test(value)) {
		return cb(new Error("密码不对怎么登？？？"))
	};
	console.log(value);
	axios
		.post('/checkOldPassword', { username: this.props.state.UserName, password: value})
		.then(({data}) => {
			// console.log(data.err === 2)
			if(data.err === 2) {
				return cb(new Error("密码输入错误"))
			}
			cb()
		})
}