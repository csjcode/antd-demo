import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import { Layout, Menu, Breadcrumb, Button, Card } from 'antd';
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

export default class componentName extends Component {
  static propTypes = {

  }
  
  constructor(props) {
    super(props)
    
  }
  
  renderCards(myData){
    return myData.map((x,i)=>{
      return (

        <Card
          hoverable 
          cover={<img alt="example" src="http://via.placeholder.com/300x150"/>}
          title={myData[i].title} 
          extra={<a href="#">More</a>} 
          style={{ display:'inline-block', margin:10, width: 300,  }}
        >
        <p>{myData[i].title} has {myData[i].numPat}+ patent PDFs with images in lcuded in the PDF and also separate XML data files to import into other apps.</p>
        <p>{myData[i].imgUrl}</p>
        <Meta
          title={myData[i].title}
          description="www.freshpatents.com"
        />

        </Card>
      )
    })

    // alert(myData[1].title);
  }

  render() {

    var myData = [
      {
        'title':'Apple',
        'numPat':1200,
        'imgUrl':'Apple.png'
      },
      {
        'title':'Google',
        'numPat':1000,
        'imgUrl':'Google.png'
      },
      {
        'title':'Virtual Reality',
        'numPat':900,
        'imgUrl':'Virtual-Reality.png'
      },
      {
        'title':'Eyeglasses',
        'numPat':600,
        'imgUrl':'Eyeglasses.png'
      },
      {
        'title':'Eyeglasses',
        'numPat':1000,
        'imgUrl':'Eyeglasses.png'
      },
      {
        'title':'Mobile Phones',
        'numPat':1200,
        'imgUrl':'Mobile-Phones.png'
      },
      {
        'title':'Apple',
        'numPat':1000,
        'imgUrl':'Apple.png'
      },
      {
        'title':'Google',
        'numPat':1000,
        'imgUrl':'Google.png'
      },
      {
        'title':'Virtual Reality',
        'numPat':1100,
        'imgUrl':'Virtual-Reality.png'
      },
      {
        'title':'Eyeglasses',
        'numPat':1000,
        'imgUrl':'Eyeglasses.png'
      },
      {
        'title':'Eyeglasses',
        'numPat':1600,
        'imgUrl':'Eyeglasses.png'
      },
      {
        'title':'Mobile Phones',
        'numPat':1000,
        'imgUrl':'Mobile-Phones.png'
      }
    ];

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
          <div style={{ background: '#fff', padding: 24, minHeight: 280, marginBottom:20 }}>

            <div>
              {this.renderCards(myData)}
            </div>
            
            

            <div>

              In computing, React (sometimes styled React.js or ReactJS) is a JavaScript library[2] for building user interfaces.

              It is maintained by Facebook, Instagram and a community of individual developers and corporations.[3][4][5]

              React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS.[6]

            </div>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Created by Chris St. John
        </Footer>
      </Layout>
    )
  }
}





