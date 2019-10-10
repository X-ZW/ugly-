import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'element-react';
import { clickpersonalinfo } from '../../action';
export default class PersonalInfo extends Component {
	constructor(props) {
		super(props);

	 	this.state = {
		    columns: [
		    	{
		    		label: "员工编号",
		    		prop: "num",
		    		width: 180,
		    		sortable: true
		    	},
		    	{
			        label: "入职日期",
			        prop: "date",
			        width: 180,
			        //排序
			        sortable: true
		      	},
		      	{
			        label: "姓名",
			        prop: "name",
			        width: 180
		      	},
		     	{
			        label: "地址",
			        prop: "address"
		      	}
		    ],
		    data: []
		}
	}
    componentWillMount() {
        axios
            .get('/personalinfo')
            .then(({data}) => {
            	this.setState({data: data.data})
            })
    }
	render() {
		// console.log(this)
		let me = this;
	  return (
	    <Table
	      style={{width: '100%'}}
	      columns={this.state.columns}
	      data={this.state.data}
	      border={true}
	      stripe={true}
	      maxHeight={540}
	      highlightCurrentRow={true}
	      onCellClick={function(msg) {
	      	console.log(me.props)
	      	me.props.dispatch(clickpersonalinfo(msg))
	      	console.log(arguments);
	      	me.props.history.push("/home/test2");
	      }}
	    />
	  )
	}
}