import React, { Component } from 'react';
import './App.css';
import myData from './data/myData'
import CardImgTag from './CardImgTag'
import CheckboxAction from './CheckboxAction'
import { Layout, Menu, Breadcrumb, Card } from 'antd';
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.toggleSaved = this.toggleSaved.bind(this);
    this.state = {
      selected: false,
      save:[]
    }
  }

  toggleSaved(x,id){
    if(this.state.save.includes(id)){
      this.setState((prevState) => ({
        save: prevState.save.filter(i => i !== id)
      }))
      console.log(`removed ${id}`);
    } else {
      this.setState({ 
        save: [...this.state.save, id] 
      }); 
      console.log(`added ${id}`);
    }
    
    
  }

  handleCheckbox(x,i){
    return this.toggleSaved(x,i);
  }
  
  renderCards(myData){
    return myData.map((x,i)=>{
      return (
        <Card
          key={i}
          onClick={() => this.handleCheckbox(x.title,i)}
          hoverable 
          cover={<CardImgTag myImg={myData[i].imgUrl}/>}
          title={myData[i].title} 
          extra={<CheckboxAction/>}
          style={{ display:'inline-block', margin:10, width: 300 }}
        >
        
        <p>{myData[i].title} has {myData[i].numPat}+ patent PDFs with images in included in the PDF and also separate XML data files to import into other apps.</p>
        <p>{myData[i].imgUrl}</p>
        <Meta
          title={myData[i].title}
          description="www.freshpatents.com"
        />

        </Card>
      )
    })

  }

  render() {

    return (
      <Layout className="layout" style={{padding:0, margin: 0, backgroundColor:'#fff'}}>
        <Header style={{padding:0, margin: 0}}>
        <div className="logo"/>
          <Menu
            theme="light"
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
            <Breadcrumb.Item>FreshPatents.com</Breadcrumb.Item>
            <Breadcrumb.Item>Deals</Breadcrumb.Item>
            <Breadcrumb.Item>End-of-Year Patent Pack Special</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, marginBottom:20 }}>

            <div>
              {this.renderCards(myData)}
            </div>
            
            {console.log(JSON.stringify(this.state))}

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





