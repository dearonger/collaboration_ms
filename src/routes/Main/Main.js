import React from 'react';
import { Layout, Menu } from 'antd';

import MainMenu from '../../components/MainMenu/MainMenu';
import style from './Main.less';

  const { Header, Content, Sider } = Layout;

class Main extends React.Component {
    render(){
        return (
            <Layout>
            <Header className="header">
              <div className={style.logo} />
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' ,float:'right'}}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
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
                  Content
                </Content>
              </Layout>
            </Layout>
          </Layout>
        );     
    }
}
export default Main;
