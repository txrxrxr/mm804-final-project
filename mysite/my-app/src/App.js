import React from 'react';
import './App.css';
import TableComponent from './table/table.js'
import ChartComponent from './chart/chart.js'
import Nav from './navigation/nav.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Layout, Icon, Menu } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <Router>
      <div className="App">
        <Layout className="layout" style={{ 'height': '100vh' }}>
          <Nav/>
            <Content style={{ 'backgroundColor': 'white' }}>
              <Route exact path="/detail" component={detail} />
              <Route exact path="/" component={home} />
            </Content>
          <Footer style={{ 'height': '1rem' }}><div style={{ 'margin': '-0.5rem auto' }}>©2021 MM804 Final Project</div></Footer>
        </Layout>
      </div>
    </Router>
  );
}

function home() {
  return (
    <div style={{ 'marginTop': '25vh' }}>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Row type="span" justify="space-around" align="center">
              <ChartComponent></ChartComponent>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  )
}


function detail() {
  return (
    <div style={{ 'marginTop': '5vh' }}>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <TableComponent></TableComponent>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  )
}

export default App;
