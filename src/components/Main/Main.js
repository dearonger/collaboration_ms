import React from 'react';
import { Layout } from 'antd';

import MainMenu from '../../components/MainMenu/MainMenu';
import style from './Main.less';
import imgURL from 'routes/assets/logo.png';

const { Header, Content, Sider } = Layout;

class Main extends React.Component {
  render() {
    const { children } = this.props;
    const isSpLayout = (window.location.hash.match(/[a-zA-Z]+/) && window.location.hash.match(/[a-zA-Z]+/)[0] || '') === 'login';
    console.log('isSpLayout', isSpLayout)

    return (

      <Layout >
        {isSpLayout
          ?
          <Layout>
            <Content>
              {children}
            </Content>
          </Layout > :
          <>
            <Header className="header">
              {/* <div className={style.logo} /> */}
            </Header>
            <Layout>
              <Sider width={256} style={{ background: '#fff' }}>
                <MainMenu />
              </Sider>
              <Layout style={{ padding: '0 16px' }}>
                <Content style={{
                  background: '#fff', padding: 16, margin: 0, minHeight: 870,
                }}
                >
                  {children}
                </Content>
              </Layout>
            </Layout>
          </>
        }
      </Layout>
    );
  }
}
export default Main;
