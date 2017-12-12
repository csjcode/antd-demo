import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './CheckboxAction.css';
import { Checkbox } from 'antd';
// const CheckboxGroup = Checkbox.Group;

export default class CheckboxAction extends Component {

  render(){
      return(
         <div>
           +ADD <Checkbox style={{marginLeft:3}}/>
         </div>
      )
  }
}
