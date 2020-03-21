import React from "react";
import autoscroll from "autoscroll-react";
import Loading from "./Loading"

function UserClass(props) {
    const author = props.author;

    if (author == "grandpybot"){
        return "list-group-item list-group-item-dark grandpybot mr-5 my-3 w-75"
    }
    else{
        return "list-group-item active user ml-5 my-3 w-75"
    }
}

function Message(props) {
    if (props.img){
        return (<img src={props.img} className="map"/>);
    }
    else{
        if(props.url){
            return (<p>{props.message} <a href={props.url}>[En savoir plus sur Wikipedia]</a></p> )
        }
        return props.message
    }

}

class List extends React.Component {
  render() {
    const { items } = this.props;
    const { status } = this.props;

    return (
        <div className="chatbox my-2">
              <ul className="list-group" {...this.props}>
                {items.map(item => <li className={UserClass({author:item.author})}>{Message(item)}</li>)}
              </ul>
            <Loading status = { status }/>
        </div>
    );
  }
}

export default autoscroll(List, { isScrolledDownThreshold: 100 });