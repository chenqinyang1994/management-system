import React from "react";
import { Layout } from "antd";
import classNames from "classnames";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import Logo from "@assets/img/logo192.png";
import Menu from "@components/menu";
import "./index.less";

const { Header, Sider, Content } = Layout;

class Console extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
      console.log('layout render');
  }

  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <div className="console-wrap">
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
            <Menu />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Console;