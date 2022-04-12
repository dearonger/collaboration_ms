import React from 'react';
import { Layout } from 'antd';

import MainMenu from '../../components/MainMenu/MainMenu';
import style from './Main.less';
import imgURL from 'routes/assets/logo.png';

const { Header, Content, Sider } = Layout;

class Main extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header className="header">
<<<<<<< HEAD
          {/* <div className={style.logo} /> */}
        </Header>
        <Layout>
          <Sider width={256} style={{ background: '#fff' }}>
=======
          <img src={imgURL } className={style.logo}/>
        </Header>
        <Layout>
          <Sider width={256} style={{ background: '#001629' }}>
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199
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
      </Layout>
    );
  }
}
export default Main;
