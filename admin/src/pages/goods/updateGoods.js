import React from 'react'
import {
   Form, Icon, Input, Button
 } from 'antd';
 
 class NormalLoginForm extends React.Component {
   handleSubmit = (e) => {
		//父向子传参
		 this.props.hideUpModal()
   }
 
   render() {
	 const { getFieldDecorator } = this.props.form;
	 return (
	
	   <Form onSubmit={this.handleSubmit} className="login-form">
		 <Form.Item>
		   {getFieldDecorator('userName', {
			 rules: [{ required: true, message: 'Please input your username!' }],
		   })(
			 <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
		   )}
		 </Form.Item>
		 <Form.Item>
		   {getFieldDecorator('password', {
			 rules: [{ required: true, message: 'Please input your Password!' }],
		   })(
			 <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
		   )}
		 </Form.Item>
		 <Form.Item>
			<Button onClick={this.handleSubmit.bind(this)}>提交</Button>
		 </Form.Item>
		</Form>
	 );
   }
 }
 
export default Form.create({ name: 'normal_login' })(NormalLoginForm);
 
 