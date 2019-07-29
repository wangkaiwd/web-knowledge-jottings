import React, { useState } from 'react';
import { Card, Icon, Layout } from 'antd';
import './app.scss';
import SideMenu from '@/components/sideMenu/SideMenu.jsx';

const { Header, Sider, Content, Footer } = Layout;

function App (props) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);
  return (
    <Layout className="app">
      <Sider width={200} collapsed={collapsed} style={{ height: '100%', overflow: 'auto' }}>
        <div className="logo"></div>
        <SideMenu/>
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
