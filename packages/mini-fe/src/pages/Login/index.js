import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from './index.module.css';
import 'tachyons';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const {setCookie} = require('../handlecookie')

class NormalLoginForm extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }

  handleSubmit = (e) => {
    e.preventDefault(); //这里相当于阻止了表单提交时的默认行为
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signInAction(values)
        if (this.props.signIn.signIn.status === 200) {
            // var millisecond = new Date().getTime();
            // var expiresTime = new Date(millisecond + 60 * 1000 * 15)
            const cookieValue = this.props.signIn.signIn.token
            setCookie("token", cookieValue, 15)
            this.props.setAuthAction(cookieValue)
            // document.cookie = `token = ${this.props.signIn.signIn.token}; expires= ${expiresTime}`

            this.props.history.push('/dashboard');
            console.log('cookie', document.cookie);
          } else {
            message.error(this.props.signIn.signIn.description);
          }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <article className="mw5 center shadow-5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className={style.title}>welcome back</div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="E-mail"
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
            <Checkbox>Remember me</Checkbox>
            <br />
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <br />
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </article>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default withRouter(Login);
