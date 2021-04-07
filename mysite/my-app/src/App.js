import React from 'react';
import './App.css';
import TableComponent from './table/table.js'
import ChartComponent from './chart/chart.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Layout, Icon, Menu } from 'antd';

const { Header, Footer, Content, Sider } = Layout;

const { SubMenu } = Menu;

function App() {
  function iconOnClickHandler(){
    window.location = '/'
  }

  return (
    <Router>
      <div className="App">
        <Layout style={{ 'height': '100vh' }}>
          <Header>
             <Icon onClick={(e) => iconOnClickHandler()} style={{color: 'white', fontSize: '3rem', margin: '1vh'}} type="area-chart" />
          </Header>
          <Layout>
            <Sider>
              <Menu
                  defaultSelectedKeys={['1']}
                  mode = "inline">
                  <Menu.Item key="1">
                    <Link to='/'/>
                    <Icon type="dashboard" />
                    COVID-19 Dashboard
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="bar-chart" />
                    Vaccine Coverage
                  </Menu.Item>
                  <Menu.Item key="link">
                    <Link to='/detail'/>
                    <Icon type="database" />
                    Details
                  </Menu.Item>
                </Menu>
            </Sider>

            <Content style={{ 'backgroundColor': 'white' }}>
              <Route exact path="/detail" component={detail} />
              <Route exact path="/" component={home} />
            </Content>
          </Layout>
          <Footer style={{ 'height': '1rem' }}><div style={{ 'margin': '-0.5rem auto' }}>©2021 MM804 Final Project</div></Footer>
        </Layout>
      </div>
    </Router>
  );
}

function home() {
  return (
    <div style={{ 'marginTop': '20vh' }}>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Row type="span" justify="space-around" align="center">
              <ChartComponent></ChartComponent>
          </Row>
          {/* <Row style={{marginTop: 10}} type="flex" justify="space-around" align="bottom">
              <IconLinkComponent></IconLinkComponent>
          </Row> */}
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  )
}


function detail() {
  return (
    <>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <TableComponent></TableComponent>
        </Col>
        <Col span={2}></Col>
      </Row>
    </>
  )
}

function menu() {
  return (
    <>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">
          <Icon type="mail" />
          Navigation One
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="mail" />
          Navigation Two
        </Menu.Item>
        <Menu.Item key="link">
          <Icon type="mail" />
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
          </a>
        </Menu.Item>
      </Menu>
    </>
  );
}


export default App;
