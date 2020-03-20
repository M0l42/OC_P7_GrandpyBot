import React from "react";
import autoscroll from "autoscroll-react";
import {isMobile} from 'react-device-detect'

function UserClass(props) {
    const author = props.author;

    if (author == "grandpybot"){
        return "list-group-item list-group-item-dark grandpybot mr-5 my-3"
    }
    else{
        return "list-group-item active user ml-5 my-3"
    }
}

function Message(props) {
    if (props.img){
        return (<img src={props.img}/>)
    }
    else{
        return props.message
    }

}

class List extends React.Component {
  render() {
    const { items } = this.props;
    console.log(this.props);

    return (
        <div className="chatbox">
          <ul className="list-group" {...this.props}>
            {items.map(item => <li className={UserClass({author:item.author})}>{Message(item)}</li>)}
          </ul>
        </div>
    );
  }
}

export default autoscroll(List, { isScrolledDownThreshold: 100 });
