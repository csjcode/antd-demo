import React, { Component } from 'react';

class CardImgTag extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        var myImgUrl = 'https://www.freshpatents.com/deals/patentpack/images/yearend/sm/' + this.props.myImg + '.jpg';
        return (  
            <img alt={this.props.myImg} src={myImgUrl}/>
        )
    }
}
 
export default CardImgTag;