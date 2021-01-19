import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

class App extends React.Component {

  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="3"><Link to="/topics">nav 3</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/about">nav 2</Link></Menu.Item>
              <Menu.Item key="1"><Link to="/">nav 1</Link></Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Switch>
              <Route path="/about">
                ABOUT
              </Route>
              <Route path="/topics">
                TOPIS
              </Route>
              <Route path="/">
                HOME
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Investment Portfolio ©2021 Created by Algarvis</Footer>
        </Layout >
      </Router >
    );
  }
}

export default App;