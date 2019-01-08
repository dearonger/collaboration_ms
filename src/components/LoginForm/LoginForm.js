import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import style from './LoginForm.less';
  
  class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className={style.loginForm}>
          <span className={style.formTitle}>登录</span>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <a className={style.loginFormForgot} href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className={style.loginFormButton}>
              登录
            </Button>
            或 <a href="">注册</a>
          </Form.Item>
        </Form>
      );
    }
  }
  
   const LoginForm = Form.create()(NormalLoginForm);
  export default LoginForm;
