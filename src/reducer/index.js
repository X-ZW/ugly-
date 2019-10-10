import  { LOGIN_USER_INFO, CLICK_PERSONAL_INFO } from '../consts';

import { combineReducers } from 'redux';

function reducer(state = '', action) {
	switch (action.type) {
		case LOGIN_USER_INFO:
			state = action.data
			break;
		default:;
	}
	return state
}

//处理点击个人信息 将信息传递到 详细信息页面
function detailinfo(state = {}, action) {
	let result = {};
	switch (action.type) {
		case CLICK_PERSONAL_INFO:
		result.data = action.data
		break;
		default:;
	}
	return Object.assign({}, state, result);
}

let allReducer = combineReducers({
	UserName: reducer,
	DetailInfo: detailinfo
})
export default allReducer;


