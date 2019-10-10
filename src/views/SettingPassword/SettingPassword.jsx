import React, { Component, createRef } from 'react';
import { Button, Form, Input } from 'element-react';
import axios from 'axios';
import './SettingPassword.less';

import { checkPassworod, checkOldPassword } from '../../tools';




export default class SettingPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: {
				oldPassword: "",
				newPassword: ""
			}
		};
		this.updatePassword = createRef()
	}
	get rules() {
		return {
			oldPassword: [
				{
					required: true,
					validator: checkOldPassword.bind(this),
					trigger: "blur"
				}
			],
			newPassword: [
				{
					required: true,
					trigger: "blur",
					validator: checkPassworod
				}
			]
		}
	}
	change(key, value) {
		this.setState({
			password: Object.assign(this.state.password, { [key]: value })
		})
	}
	clickBtn() {
		//获取新的密码
		let newmsg = this.state.password.newPassword;
		// console.log(this.updatePassword.current.validate);
		this.updatePassword.current.validate(bool => {
			console.log(bool);
			console.log(this)
			if(bool) {
				axios
					.post('/changepassword', {username: this.props.state.UserName, password: newmsg})
					.then(({data}) => {
						console.log(data);
						if(!data.err) {
							this.props.state.UserName = '';
							this.props.history.replace('/login');
						}
					})
			}
		})
	}
	render() {
		return (
			<div className="setting">
				<Form labelWidth="100px" ref={this.updatePassword} rules={this.rules} model={this.state.password}>
					<Form.Item label="旧密码" prop="oldPassword">
						<Input 
							placeholder="输入旧密码"
							value={this.state.password.oldPassword}
							onChange={e => this.change('oldPassword', e)}
						></Input>
					</Form.Item>
					<Form.Item label="新密码" prop="newPassword">
						<Input 
							placeholder="输入新密码"
							value={this.state.password.newPassword}
							onChange={e => this.change('newPassword', e)}
						></Input>
					</Form.Item>
					<Form.Item>
						<Button onClick={this.clickBtn.bind(this)}>确认修改</Button>
					</Form.Item>
				</Form>
			</div>
		)
	}
}