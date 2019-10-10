import React, { Component, createRef } from 'react';
import { Button, Form, Input } from 'element-react';
import { Link, HashRouter as Router } from 'react-router-dom';

//引入规则
import { checkUsername, checkPassworod } from '../../tools';


import { login } from '../../action'
import './Login.less'
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: {
				username: "",
				password: ""
			}
		};
		this.login = createRef()
	}
	change(key, value) {
		this.setState({ 
			msg: Object.assign(this.state.msg, { [key]: value })
		})
	}
	submit() {
		this.login.current.validate(bool => {
			if(bool) {
				this.props.dispatch(login(this.state.msg, this))
			}
		})

	}
	//定义表单验证
	get rules() {
		return {
			username: [
				{
					required: true,
					message: "用户名必填",
					trigger: "blur"
				},
				{
					validator: checkUsername,
					trigger: "blur"
				}
			],
			password: [
				{
					required: true,
					message: "密码不填怎么登？？？",
					trigger: "blur"
				},
				{
					validator: checkPassworod,
					trigger: "blur"
				}
			]
		}
	}
	render() {
		return (
			<div className="xzw-login">
				<h1>许英俊的登录页面</h1>
				<Form labelWidth="100px" ref={this.login} rules={this.rules} model={this.state.msg}>
					<Form.Item label="用户名" prop="username">
						<Input 
							placeholder="请输入用户名"
							value={this.state.msg.username}
							onChange={e => this.change("username", e)}
						></Input>
					</Form.Item>
					<Form.Item label="密码" prop="password">
						<Input 
							placeholder="请输入密码"
							value={this.state.msg.password}
							onChange={e => this.change("password", e)}
							type="password"
						></Input>
					</Form.Item>
					<Form.Item className="test">
						<Button onClick={this.submit.bind(this)}>登录</Button>
						<Router>
							<Link to="/register" className="toregister">立即注册</Link>
						</Router>
					</Form.Item>
				</Form>
				
			</div>
		)
	}
	componentDidMount(props) {
		if(this.props.state.UserName) {
			this.props.history.push('/')
		}
	}
}