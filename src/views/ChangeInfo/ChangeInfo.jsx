import React, { Component, createRef } from 'react';
import axios from 'axios';
//引入组件 
import { Form, Input, Button } from 'element-react'

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                num: this.props.state.DetailInfo.data ? this.props.state.DetailInfo.data.num : '',
                name: this.props.state.DetailInfo.data ? this.props.state.DetailInfo.data.name : '',
                date: this.props.state.DetailInfo.data ? this.props.state.DetailInfo.data.date : '',
                address: this.props.state.DetailInfo.data ? this.props.state.DetailInfo.data.address : ''
            }
        };
        this.form = createRef();
    }
    get rules() {
        return {
            num: [
                {
                    required: true,
                    trigger: "bulr",
                    message: "员工编号必填"
                }
            ],
            name: [
                {
                    required: true,
                    trigger: "bulr",
                    message: "姓名必填"
                }
            ],
            date: [
                {
                    required: true,
                    trigger: "bulr",
                    message: "入职日期必填"
                }
            ],
            address: [
                {
                    required: true,
                    trigger: "bulr",
                    message: "住址必填"
                }
            ],
        }
    }
    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }
    submit() {
        this.form.current.validate(bool => {
            if(bool) {
                axios
                    .post('/changepersonalinfo', this.state.form)
                    .then(({data}) => {
                        if(!data.err) {
                            this.props.history.replace('/home/personalinfo')
                        }
                    })
            }
        })
    }
    render() {
        console.log(this);
        return (
            <Form ref={this.form} model={this.state.form} rules={this.rules} labelWidth="100">
                <Form.Item label="员工编号" prop="num">
                    <Input value={this.state.form.num} onChange={this.onChange.bind(this, 'num')} autoComplete="off" />
                </Form.Item>
                <Form.Item label="姓名" prop="name">
                    <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} autoComplete="off" />
                </Form.Item>
                <Form.Item label="入职时间" prop="date">
                    <Input value={this.state.form.date} onChange={this.onChange.bind(this, 'date')}></Input>
                </Form.Item>
                <Form.Item label="住址" prop="address">
                    <Input value={this.state.form.address} onChange={this.onChange.bind(this, 'address')}></Input>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={this.submit.bind(this)}>修改提交</Button>
                </Form.Item>
            </Form>
        )
    }
}
