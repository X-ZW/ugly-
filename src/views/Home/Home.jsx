import React, { PureComponent } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'element-react';


//引入个人信息页面
import PersonalInfo from '../PersonalInfo/PersonalInfo';
//详细信息
import DetailedInfo from '../DetailedInfo/DetailedInfo';
//引入设置页面
import SettingPassword from '../SettingPassword/SettingPassword';
//引入修改员工信息的页面
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import './Home.less'

//dealfn
import { dealFn } from '../../store';
let DealPersonalInfo = dealFn(PersonalInfo);
let DealDetailedInfo = dealFn(DetailedInfo);
let DealChangeInfo = dealFn(ChangeInfo);

let RouterSettingPassword = dealFn(withRouter(SettingPassword));


export default class Home extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			ddIsShow: false,
			index: 1
		}
	}
	onOpen() {
		//	SubMenu 展开的回调
	}

	onClose() {
		//	SubMenu 收起的回调
	}
	exit() {
		this.props.state.UserName = '';
		this.props.history.replace('/login');
	}
	render() {
		// console.log(this.state.index)
		return(
			<div className="home">
				{/*头部*/}
				<Layout.Row>
			        <Layout.Col span="24">
			        	<div className="grid-content bg-purple-dark home-header">
			        		<h1>许英俊的后台</h1>
			        		<div className="home-header-right">
			        			<span>欢迎</span>
			        			<dl>
			        				<dt onClick={ e => {
			        					 this.setState({ddIsShow: !this.state.ddIsShow});
			        				}}>{this.props.state.UserName}</dt>
			        				<dd style={{display: this.state.ddIsShow ? "" : "none"}}>
			        					<span onClick={this.exit.bind(this)}>退出登录</span>
			        				</dd>
			        			</dl>
			        		</div>
			        	</div>
			        </Layout.Col>
			    </Layout.Row>
			    <Layout.Row>
			        <Layout.Col span="4" style={{height: this.state.contentHeight, backgroundColor: "#EEF1F6"}}>
			        	<div className="grid-content bg-purple" style={{height: this.state.contentHeight}}>
			        		<Menu 
			        			className="el-menu-vertical-demo"
			        			>
						        <Menu.SubMenu index="1" title="数据库个人信息">
						           	<Menu.Item index="1-1">
						           		<Link 
						           			to="/home/personalinfo" 
						           			style={{color: this.state.index === 1 ? "skyblue" : ""}}
						           			onClick={e => this.setState({index: 1})}
						           		>个人信息
						           		</Link>
						           	</Menu.Item>
						           	<Menu.Item index="1-2">
						           		<Link 
						           			to="/home/test2"
						           			style={{color: this.state.index === 2 ? "skyblue" : ""}}
						           			onClick={e => this.setState({index: 2})}
						           		>个人详细信息</Link>
						           	</Menu.Item>
						        </Menu.SubMenu>
						        <Menu.SubMenu index="2" title="修改信息">
						           <Menu.Item index="2-1">
						           		<Link 
						           			to="/home/test3"
						           			style={{color: this.state.index === 3 ? "skyblue" : ""}}
						           			onClick={e => this.setState({index: 3})}
						           		>修改个人信息</Link>
						           	</Menu.Item>
						        </Menu.SubMenu>
						        <Menu.SubMenu index="3" title="账户信息">
						           <Menu.Item index="3-1">
						           		<Link 
						           			to="/home/test4"
						           			style={{color: this.state.index === 4 ? "skyblue" : ""}}
						           			onClick={e => this.setState({index: 4})}
						           		>修改密码</Link>
						           	</Menu.Item>
						        </Menu.SubMenu>
						    </Menu>
			        	</div>
			        </Layout.Col>
			        <Layout.Col span="20">
			        	<div className="grid-content bg-purple-light content-right" style={{height: this.state.contentHeight}}>
							<Route path="/home/personalinfo" exact component={DealPersonalInfo}></Route>
							<Route path="/home/test2" component={DealDetailedInfo}></Route>
							<Route path="/home/test3" component={DealChangeInfo}></Route>
							<Route path="/home/test4" component={RouterSettingPassword}></Route>
			        	</div>
			        </Layout.Col>
		     	</Layout.Row>
			</div>
		)
	}
	componentWillMount() {
		// if(!this.props.state.UserName) {
		// 	return this.props.history.replace('/login')
		// }

		//计算屏幕高度
		var total = document.documentElement.clientHeight;
		//计算content部分的高
		var contentHeight = total - 90;
		this.setState({contentHeight});
		if(Number(this.props.match.url.slice(-1)) + '' === 'NaN') {
			return this.setState({index: 1})
		}
		this.setState({index: Number(this.props.match.url.slice(-1))})
	}
	// shouldComponentUpdate(newProps) {
	// 	return newProps.location.pathname !== this.props.location.pathname
	// }
	componentWillUpdate(newProps, newState) {
		if(Number(newProps.match.url.slice(-1)) + '' === 'NaN') {
			return newState.index = 1;
		}
		// this.setState({index: Number(this.props.match.url.slice(-1))})
		newState.index = Number(newProps.match.url.slice(-1))
	}
}