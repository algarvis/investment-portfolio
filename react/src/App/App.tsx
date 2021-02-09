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
import Portfolios from '../Portfolios/Portfolios';
import PortfolioDetails from '../PortfolioDetails/PortfolioDetails';
import Assets from '../Assets/Assets';

const { Header, Content } = Layout;

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
          <Switch>
            <Route path="/portfolios/:portfolioId">
              <PortfolioDetails />
            </Route>
            <Route path="/portfolios">
              <Content>
                <Portfolios />
              </Content>
            </Route>
            <Route path="/assets">
              <Assets />
            </Route>
            <Route path="/">
              404 not found
              </Route>
          </Switch>
        </Layout >
      </Router >
    );
  }
}

export default App;