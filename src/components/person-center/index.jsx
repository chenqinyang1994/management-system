import React from "react";
import { Avatar, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

import "./index.less";
const { Item } = Menu;

function PersonCenter(props) {
  const menu = (
    <Menu>
      <Item>
        <Link to="/layout/person-info">个人中心</Link>
      </Item>
      <Item>
        <Link to="/login">退出</Link>
      </Item>
    </Menu>
  );
  return (
    <div className="person-center">
      <Dropdown overlay={menu} trigger={["click"]} placement='bottomRight'>
        <div className='person-center-wrap'>
          <Avatar
            style={{ backgroundColor: "#7265e6", verticalAlign: "middle" }}
            size="small"
          >
            Lucy
          </Avatar>
          <div className="person-center-name">Lucy</div>
        </div>
      </Dropdown>
    </div>
  );
}

export default PersonCenter;
