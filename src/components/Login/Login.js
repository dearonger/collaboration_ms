import React from 'react';
import { Layout } from 'antd';

import LoginForm from '../LoginForm/LoginForm';
import style from './Login.less';

const { Header, Footer, Content } = Layout;

class Login extends React.Component {

  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content className={style.main}>
          <div className={style.loginForm}>
            <LoginForm />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Login;
