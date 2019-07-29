import React, { useState } from 'react';
import { Card, Icon } from 'antd';
import './app.scss';
import SideMenu from '@/components/sideMenu/SideMenu.jsx';
import Layout from '@/components/layout/Layout.jsx';
import Sider from '@/components/layout/Sider.jsx';
import Header from '@/components/layout/Header.jsx';
import Content from '@/components/layout/Content.jsx';
import Footer from '@/components/layout/Footer.jsx';

// const { Header, Sider, Content, Footer } = Layout;

function App (props) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);
  return (
    <Layout className="app">
      <Sider
        collapsed={collapsed}
        style={{ height: '100%', overflow: 'auto', width: '200px', backgroundColor: '#001529' }}
      >
        <div className="logo"></div>
        <SideMenu collapsed={collapsed}/>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
            style={{ padding: '0 24px', fontSize: '18px' }}
          />
          Header
        </Header>
        <Content>
          <Card style={{ height: '100%', overflow: 'auto', margin: '24px' }} bordered={false}>
            {props.children}
          </Card>
        </Content>
        <Footer>
          footer
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
