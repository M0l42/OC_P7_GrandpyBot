import React, { Component } from 'react'
import Img from 'react-image'
import {isMobile} from 'react-device-detect'

class Grandpy extends Component {
    render() {
        const img = this.props.img;
        const location = this.props.location;
        let image= "0" + img.toString();
        let path = 'static/img/grandpy/';
        if (isMobile || window.innerWidth < 1200){
            path += 'mobile/'
        }
    return (
        <div>
            <Img src={path + location +'/' + image + '.png'} alt="Grandpy"/>
        </div>
    );
  }
}

export default Grandpy;
