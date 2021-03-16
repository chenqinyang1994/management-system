import React from "react";
import { Layout } from "antd";
import classNames from "classnames";
import { Switch } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import RouteWithSubRoutes from "@/routes";
import Logo from "@/assets/img/logo192.png";
import Menu from "@/components/menu";
import PersonCenter from "../person-center";
import "./index.less";

const { Header, Sider, Content } = Layout;

class CustomLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    const { routes } = this.props;
    return (
      <div className="layout-wrap">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
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
            <Menu collapsed={this.state.collapsed} />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-header" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
              <PersonCenter />
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
  }
}

export default CustomLayout;
