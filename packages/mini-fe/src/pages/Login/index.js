import React, { Component } from 'react'
import {Flex} from 'antd'
import {Link} from 'react-router-dom'
import NavHeader from '../../component/NavHeader'
import style from './index.module.css'
import 'tachyons'

import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();//这里相当于阻止了表单提交时的默认行为
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.loading('You are Logging In...', 2.5)
        .then(() => {
          message.success('Now you are logged in', 1.0)
          console.log('Received values of form: ', values);
        })

      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <article className="mw5 center shadow-5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className = {style.title}>welcome back</div>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <br/>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to='/register'>register now!</Link>
        </Form.Item>
        </Form>
      </article>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login
