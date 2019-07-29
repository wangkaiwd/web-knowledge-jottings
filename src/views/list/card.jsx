import React from 'react';
import Layout from '@/components/layout/Layout.jsx';
import Header from '@/components/layout/Header.jsx';
import Content from '@/components/layout/Content.jsx';
import Footer from '@/components/layout/Footer.jsx';

const CardList = () => {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default CardList;
