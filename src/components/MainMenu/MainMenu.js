import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

import style from './MainMenu.less';

const SubMenu = Menu.SubMenu;

<<<<<<< HEAD
const { SubMenu } = Menu;
=======
class MainMenu extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
    render() {
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199

class MainMenu extends React.Component {
  render() {
    const menuArr = menu.map((item, index) => {
      // if (index !== 1) {
      return (
<<<<<<< HEAD
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
      // }
      // return (
      //   <Menu.Item key={item.index} >
      //     <Icon type={item.icon} style={{ fontSize: '16px' }} />
      //     <span>{item.name}</span>
      //     <Link to={item.index}></Link>
      //   </Menu.Item>
      // )
    });

    const selectedKey = window.location.hash.match(/[a-zA-Z]+/) && window.location.hash.match(/[a-zA-Z]+/)[0] || 'objBuilder';
    return (
      <Menu style={{ paddingTop: '10px' }}
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        defaultOpenKeys={['data']}
      >
        {menuArr}
      </Menu>
    );
=======
        <Menu
        onClick={this.handleClick}
        style={{ paddingTop: '10px'}}
        defaultSelectedKeys={['create']}
        theme="dark"
        mode="inline"
        inlineCollapsed={this.state.collapsed}
        >
        <SubMenu key="orderManage" title={<span><Icon type="appstore" /><span>订单管理</span></span>}>
          <Menu.Item key='create' className={style.menuItem}>
            <Icon type='edit' style={{fontSize: '16px'}}/>
            <span>订单录入</span>
            <Link to='create'></Link>
          </Menu.Item>
          <Menu.Item key='audit' className={style.menuItem}>
            <Icon type='solution' style={{fontSize: '16px'}}/>
            <span>订单审核</span>
            <Link to='audit'></Link>
          </Menu.Item>
          <Menu.Item key='search' className={style.menuItem}>
            <Icon type='search' style={{fontSize: '16px'}}/>
            <span>订单查询与删除</span>
            <Link to='search'></Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="orderDispatch" title={<span><Icon type="project" /><span>订单调度</span></span>}>
          <Menu.Item key='dispatch' className={style.menuItem}>
            <Icon type='file-add' style={{fontSize: '16px'}}/>
            <span>新增调度计划</span>
            <Link to='dispatch'></Link>
          </Menu.Item>
          <Menu.Item key='dispatchShow' className={style.menuItem}>
            <Icon type='cluster' style={{fontSize: '16px'}}/>
            <span>调度结果查看</span>
            <Link to='dispatchShow'></Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key='show' >
          <Icon type='read' style={{fontSize: '16px'}}/>
          <span>进度录入与查看</span>
          <Link to='show'></Link>
        </Menu.Item>
        <SubMenu key="set" title={<span><Icon type="setting" /><span>系统设置</span></span>}>
          <Menu.Item key='userInfo' className={style.menuItem}>
            <Icon type='user' style={{fontSize: '16px'}}/>
            <span>个人信息</span>
            <Link to='userInfo'></Link>
          </Menu.Item>
          <Menu.Item key='paramSet' className={style.menuItem}>
            <Icon type='laptop' style={{fontSize: '16px'}}/>
            <span>调度参数设置</span>
            <Link to='paramSet'></Link>
          </Menu.Item>
          <Menu.Item key='user' className={style.menuItem}>
            <Icon type='usergroup-add' style={{fontSize: '16px'}}/>
            <span>用户管理</span>
            <Link to='user'></Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      );
    }
>>>>>>> 05f8e40114e0b236344b17333d073b2f7f0aa199
  }
}
export default MainMenu;
