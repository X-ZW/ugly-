import React, { Component, createRef } from 'react';
import { Button, Form, Input } from 'element-react';
// import { Link, HashRouter as Router } from 'react-router-dom';

import axios from 'axios';

export default class Register extends Component {
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
		// console.log(key, value)
		this.setState({ 
			msg: Object.assign(this.state.msg, { [key]: value })
		})
	}
	submit() {
		this.login.current.validate(bool => {
			if(bool) {
				axios
					.post('/register', this.state.msg)
					.then(({data}) => {
						console.log(data)
						if (!data.err) {
							this.props.history.push('/login')
						}
					})
			}
		})
	}
	//定义表单验证
	get rules() {
		return {
			username: [
				{
					required: true,
					trigger: "blur",
					validator(rules, value, cb) {
						console.log(arguments)
						if (value === '') {
							return cb(new Error('用户名必填'))
						}
						var reg=new RegExp(/^\w{2,4}$/);
						if (!reg.test(value)) {
							return cb(new Error(' 用户名是2-4字母数字下划线'))
						}
						axios
							.post('/checkusername', {username: value})
							.then(({data}) => {
								if(data.err === 2) {
									return cb(new Error('用户名已经被占用'))
								} else if (data.err === 0) {
									return cb()
								} else {
									console("错误")
									return cb(new Error('错误'))
								}

							})
					}
				}
			],
			password: [
				{
					required: true,
					message: "密码不填怎么注册？？？",
					trigger: "blur"
				},
				{
					validator(rules, value, cb) {
						var reg = new RegExp(/^[0-9a-zA-Z_-]{2,4}$/);
						if (!reg.test(value)) {
							return cb(new Error("密码不对怎么注册？？？"))
						}
						cb()
					}
				}
			]
		}
	}
	render() {
		return (
			<div className="xzw-login">
				<h1>许英俊的注册页面</h1>
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
						<Button onClick={this.submit.bind(this)}>注册</Button>
					</Form.Item>
				</Form>
				
			</div>
		)
	}
}