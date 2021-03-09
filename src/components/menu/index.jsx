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

  const onOpenKeyChange = ({ path, type = "subMenuClick" }) => {
    let originOpenKey = [...openKey];
    if (type === "subMenuClick") {
      if (originOpenKey.find((ook) => ook === path)) {
        originOpenKey = originOpenKey.filter((ook) => ook !== path);
      } else {
        originOpenKey.push(path);
      }
    } else {
      originOpenKey = [path];
    }
    setOpenKey(originOpenKey);
  };

  //   const onMenuItemClick = ({ item, key, keyPath, domEvent }) => {
  //     onSelectedKeyChange(key);
  //   };

  const onSubMenuClick = ({ key, domEvent }) => {
    onOpenKeyChange({ path: key, type: "subMenuClick" });
  };

  const onInitMenu = (config) => {
    const menuMap = config.map((mu) => {
      if (mu.children) {
        return (
          <SubMenu
            key={mu.path}
            title={mu.name}
            onTitleClick={onSubMenuClick}
            icon={mu.icon}
          >
            {onInitMenu(mu.children)}
          </SubMenu>
        );
      } else {
        return (
          <Item key={mu.path} icon={mu.icon}>
            <Link to={mu.path}>{mu.name}</Link>
          </Item>
        );
      }
    });
    return menuMap;
  };

  const getPathnameStr = (pathname) => {
    const lastIndex = pathname.lastIndexOf("/");
    return pathname.slice(0, lastIndex);
  };

  useEffect(() => {
    onSelectedKeyChange(location.pathname);
    onOpenKeyChange({
      path: getPathnameStr(location.pathname),
      type: "location",
    });
  }, [location]);

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
