import React, { Component } from 'react'
import Img from 'react-image'

class Test extends Component {
    render() {
        const img = this.props.img;
        const location = this.props.location;
        let image= "0" + img.toString();
    return (
        <div>
            <Img src={'static/img/grandpy/' + location +'/' + image + '.png'} alt="Grandpy"/>
        </div>
    );
  }
}

export default Test;
