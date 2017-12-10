import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
const { Header, Content, Footer } = Layout;

export default class componentName extends Component {
  static propTypes = {

  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Topics</Menu.Item>
            <Menu.Item key="2">Companies</Menu.Item>
            <Menu.Item key="3">Inventors</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          
          In computing, React (sometimes styled React.js or ReactJS) is a JavaScript library[2] for building user interfaces.

It is maintained by Facebook, Instagram and a community of individual developers and corporations.[3][4][5]

React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS.[6]

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Created by Chris St. John
        </Footer>
      </Layout>
    )
  }
}





