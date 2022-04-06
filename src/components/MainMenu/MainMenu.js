import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

import style from './MainMenu.less';
import menu from 'utils/menu';

const { SubMenu } = Menu;

class MainMenu extends React.Component {
  render() {
    const menuArr = menu.map((item, index) => {
      if (index === 0) {
        return (
          <SubMenu
            key={item.index}
            title={
              <span>
                <Icon type={item.icon} style={{ fontSize: '16px' }} />
                <span>{item.name}</span>
              </span>
            }
          >
            {item.children.map(subitem => {
              return (
                <Menu.Item key={subitem.index} >
                  <Icon type={subitem.icon} style={{ fontSize: '16px' }} />
                  <span>{subitem.name}</span>
                  <Link to={subitem.index}></Link>
                </Menu.Item>
              )
            })}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.index} >
          <Icon type={item.icon} style={{ fontSize: '16px' }} />
          <span>{item.name}</span>
          <Link to={item.index}></Link>
        </Menu.Item>
      )
    });

    const selectedKey = window.location.hash.match(/[a-zA-Z]+/)[0];
    return (
      <Menu style={{ paddingTop: '10px' }}
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        defaultOpenKeys={['graphbuilder']}
      >
        {menuArr}
      </Menu>
    );
  }
}
export default MainMenu;
