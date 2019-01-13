import React from 'react';
import { Menu, Icon } from 'antd';

import style from './MainMenu.less';

class MainMenu extends React.Component {
    render() {
      return (
        <Menu style={{ paddingTop: '10px'}}
          mode="inline"
        >
           <Menu.Item key="1" className={style.menuItem}>
            <Icon type="edit" style={{fontSize: '16px'}}/>
            <span>订单录入</span>
          </Menu.Item>
          <Menu.Item key="2" className={style.menuItem}>
            <Icon type="solution" style={{fontSize: '16px'}}/>
            <span>订单审核</span>
          </Menu.Item>
          <Menu.Item key="3" className={style.menuItem}>
            <Icon type="search" style={{fontSize: '16px'}}/>
            <span>订单查询</span>
          </Menu.Item>
          <Menu.Item key="4" className={style.menuItem}>
            <Icon type="bars" style={{fontSize: '16px'}}/>
            <span>进度展示</span>
          </Menu.Item>
          <Menu.Item key="5" className={style.menuItem}>
            <Icon type="gold" style={{fontSize: '16px'}}/>
            <span>原料配置</span>
          </Menu.Item>
          <Menu.Item key="6" className={style.menuItem}>
            <Icon type="redo" style={{fontSize: '16px'}}/>
            <span>订单生产</span>
          </Menu.Item>
          <Menu.Item key="7" className={style.menuItem}>
            <Icon type="shopping-cart" style={{fontSize: '16px'}}/>
            <span>产品运输</span>
          </Menu.Item>
          <Menu.Item key="8" className={style.menuItem}>
            <Icon type="question-circle" style={{fontSize: '16px'}}/>
            <span>问题反馈</span>
          </Menu.Item>
        </Menu>
      );
    }
  }
export default MainMenu;
