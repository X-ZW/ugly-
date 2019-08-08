import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'

//引入主页
import Home from './views/Home/Home';
//引入登录页面
import Login from './views/Login/Login';
//引入注册页面
import Register from './views/Register/Register';

import { dealFn } from './store';
let DealHome = dealFn(Home);
let DealLogin = dealFn(Login);



export default class App extends React.Component {
	componentWillMount() {

	}
    render() {
        return (
        	<div>
	        	<Switch>
		        	<Route path="/home/:id" component={DealHome}></Route>
		        	<Route path="/login" component={DealLogin}></Route>
		        	<Route path="/register" component={Register}></Route>
		        	<Redirect from="/" extra to="/home/personalinfo"></Redirect>
		        </Switch>
	        </div>
        )
	}
}