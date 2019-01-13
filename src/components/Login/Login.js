import React from 'react';
import { Layout } from 'antd';

import LoginForm from '../LoginForm/LoginForm';
import style from './Login.less';

const { Header, Footer, Content } = Layout;

class Login extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {
      };
    }
    render() {
      return (
          <Layout className={style.main}>
            <Header>Header</Header>
            <Content>
              <div className={style.loginForm}>
                <LoginForm />
              </div>
            </Content>
            <Footer className={style.footer}> 华纺股份有限公司 Copyright © 永久使用 技术支持:DHU </Footer>
          </Layout>
      );
    }
}

export default Login;