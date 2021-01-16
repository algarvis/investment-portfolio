import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

  render() {
    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content>
          Content...
        </Content>
        <Footer style={{ textAlign: 'center' }}>Investment Portfolio ©2021 Created by Algarvis</Footer>
      </Layout>
    );
  }
}

export default App;