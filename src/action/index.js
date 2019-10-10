//引入消息类型
import  { LOGIN_USER_INFO, CLICK_PERSONAL_INFO } from '../consts';

//引入axios
import axios from 'axios';

//个人信息点击进入详情信息 将数据传进去
export let clickpersonalinfo = data => ({data, type: CLICK_PERSONAL_INFO})
//定义同步消息
export let updateUsername = data => ({ data, type: LOGIN_USER_INFO })

//异步登录
export let login = (data, me) => {
	console.log(me)
	return (
		dispatch => {
			axios
				.post('/login', data)
				.then(({data}) => {
					console.log(data)
					if (!data.err) {
						dispatch(updateUsername(data.username));
						return me.props.history.replace('/')
					}
			})
		}
	)
}

