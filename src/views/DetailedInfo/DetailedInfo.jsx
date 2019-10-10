import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DetailedInfo extends Component {
	render() {
		console.log(this);
		return (
			<div>
				<p>姓名:<span>{this.props.state.DetailInfo.data ? this.props.state.DetailInfo.data.name : ""}</span></p>
				<p>员工编号:<span>{this.props.state.DetailInfo.data ? this.props.state.DetailInfo.data.num : ""}</span></p>
				<p>入职时间:<span>{this.props.state.DetailInfo.data ? this.props.state.DetailInfo.data.date : ""}</span></p>
				<p>居住地:<span>{this.props.state.DetailInfo.data ? this.props.state.DetailInfo.data.address : ""}</span></p>
				<Link to="/home/test3">修改信息</Link>
			</div>
		)
	}
}