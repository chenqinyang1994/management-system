import React, { useState } from "react";
import { Layout } from "antd";
import classNames from "classnames";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import RouteWithSubRoutes from "@/routes";
import Logo from "@/assets/img/logo192.png";
import Menu from "@/components/menu";
import PersonCenter from "../person-center";
import ThemeToggle from "../theme-toggle";
import "./index.less";

const { Header, Sider, Content } = Layout;

const CustomLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { themeValue } = useSelector((state) => ({
    themeValue: state.themeManage.themeValue,
  }));

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const { routes } = props;
  return (
    <div className="layout-wrap">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme={themeValue}
        >
          <div className={classNames("logo", { collapsed })}>
            {collapsed ? (
              <img src={Logo} alt="LOGO" />
            ) : (
              <>
                <span>LIKE</span>
                <i>J</i>
                <b>S</b>
              </>
            )}
          </div>
          <Menu collapsed={collapsed} theme={themeValue} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-header" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
            <div className="site-layout-header-right">
              <ThemeToggle />
              <PersonCenter />
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default CustomLayout;
