import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'dva/router';

import style from './MainMenu.less';
import menu from 'utils/menu';

class MainMenu extends React.Component {
    render() {
      const menuArr = menu.map((item)=>{
        return(
          <Menu.Item key={item.index} className={style.menuItem}>
            <Icon type={item.icon} style={{fontSize: '16px'}}/>
            <span>{item.name}</span>
            <Link to={item.index}></Link>
          </Menu.Item>
        )
      });

      return (
        <Menu style={{ paddingTop: '10px'}}
          mode="inline"
          defaultSelectedKeys={['create']}
        >
          {menuArr}
        </Menu>
      );
    }
  }
export default MainMenu;
