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
import { Portfolios } from '../Portfolios/Portfolios';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['portfolios']}>
              <Menu.Item key="portfolios"><Link to="/portfolios">Portfolios</Link></Menu.Item>
              <Menu.Item key="assets"><Link to="/assets">Assets</Link></Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Switch>
              <Route path="/portfolios">
                <Portfolios />
              </Route>
              <Route path="/assets">
                assets
              </Route>
              <Route path="/">
                404 not found
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