import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

import menuConfig from "./config";

const { SubMenu, Item } = Menu;

const MenuComponent = () => {
  let location = useLocation();
  const [selectedKey, setSelectedKey] = useState([""]);
  const [openKey, setOpenKey] = useState([""]);

  const onSelectedKeyChange = (path) => {
    setSelectedKey([path]);
  };

  const onOpenKeyChange = (path) => {
    setOpenKey(path instanceof Array ? path : [path]);
  };

  //   const onMenuItemClick = ({ item, key, keyPath, domEvent }) => {
  //     onSelectedKeyChange(key);
  //   };

  const onSubMenuClick = ({ key, domEvent }) => {
    onOpenKeyChange(key);
  };

  const onInitMenu = (config) => {
    const menuMap = config.map((mu) => {
      if (mu.children) {
        return (
          <SubMenu key={mu.path} title={mu.name} onTitleClick={onSubMenuClick}>
            {onInitMenu(mu.children)}
          </SubMenu>
        );
      } else {
        return (
          <Item key={mu.path}>
            <Link to={mu.path}>{mu.name}</Link>
          </Item>
        );
      }
    });
    return menuMap;
  };

  const getOpenKeys = (pathname) => {
    let openKeys = pathname.split("/");
    openKeys.pop();
    return openKeys.map((oKey) => `/${oKey}`);
  };

  useEffect(() => {
    onSelectedKeyChange(location.pathname);
    onOpenKeyChange(getOpenKeys(location.pathname));
  }, [location]);

  console.log('menu render');

  return (
    <Menu
      selectedKeys={selectedKey}
      openKeys={openKey}
      mode="inline"
      theme="dark"
      //   onClick={onMenuItemClick}
    >
      {onInitMenu(menuConfig)}
    </Menu>
  );
};

export default MenuComponent;
