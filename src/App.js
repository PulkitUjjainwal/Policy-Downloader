import React from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import TransactionReportPage from './TransactionReportPage';

const { Sider, Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200} theme="dark">
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              <Link to="/transactions">Transaction Report</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
              <h1>Policy Data Downloader</h1>
            </div>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route path="/transactions">
                  <TransactionReportPage />
                </Route>
                <Redirect to="/transactions" />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
