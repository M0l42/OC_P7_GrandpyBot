import React, { Component } from 'react'
import Img from 'react-image'
import {isMobile} from 'react-device-detect'

class Test extends Component {
    render() {
        const img = this.props.img;
        const location = this.props.location;
        let image= "0" + img.toString();
        let path = 'static/img/grandpy/';
        if (isMobile){
            path += 'mobile/'
        }
    return (
        <div>
            <Img src={path + location +'/' + image + '.png'} alt="Grandpy"/>
        </div>
    );
  }
}

export default Test;
