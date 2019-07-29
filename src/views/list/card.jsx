import React, { Fragment } from 'react';
import Layout from '@/components/layout/Layout.jsx';
import Header from '@/components/layout/Header.jsx';
import Content from '@/components/layout/Content.jsx';
import Footer from '@/components/layout/Footer.jsx';
import Sider from '@/components/layout/Sider.jsx';

const CardList = () => {
  return (
    <Fragment>
      {/*<Layout style={{ height: '100%' }}>*/}
      {/*  <Header>Header</Header>*/}
      {/*  <Content>Content</Content>*/}
      {/*  <Footer>Footer</Footer>*/}
      {/*</Layout>*/}
      {/*<Layout style={{ height: '100%' }}>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>*/}

      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default CardList;
