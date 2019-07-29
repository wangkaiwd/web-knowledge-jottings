import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import menuList from '@/router/router.config';
import { Icon, Menu } from 'antd';

const { SubMenu } = Menu;
const SideMenu = (props) => {
  const [menuTree, setMenuTree] = useState([]);
  useEffect(() => {
    setMenuTree(getMenu(menuList));
  }, []);
  const getMenu = (menuList) => {
    return menuList.map(menu => {
      if (menu.children) {
        return createSubMenu(menu);
      } else {
        return createMenuItem(menu);
      }
    });
  };
  const createSubMenu = (menu) => {
    return (
      <SubMenu
        key={menu.key}
        title={
          <span>
            <Icon type={menu.icon}/>
            <span>{menu.title}</span>
          </span>
        }
      >
        {getMenu(menu.children)}
      </SubMenu>
    );
  };
  const createMenuItem = (menu) => {
    return <Menu.Item key={menu.key}><Link to={menu.key}>{menu.title}</Link></Menu.Item>;
  };
  return (
    <div>
      <Menu
        mode="inline"
        theme="dark"
      >
        {menuTree}
      </Menu>
    </div>
  );
};

export default withRouter(SideMenu);
