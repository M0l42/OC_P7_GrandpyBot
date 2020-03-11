import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";


const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <div className="messagesWrapper">
      {messages.map(item => (
        <div className="list-group">
          <li className="list-group-item">
            <div className={item.author} key={item.message}>{item.message}</div>
          </li>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};


class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      message: [
          {"author": "grandpybot",
           "message": "Welcome !"}]
    };
  }

  getMessage =(user, userMessage)=> {
    const {message} = this.state;
    const newMessage = {
      "author": user,
      "message": userMessage,
    };

    this.setState({
      message: [...this.state.message, newMessage]
    });
  };

  writeMessage =(data)=>{
    this.getMessage("grandpybot", data.first_message);
    this.getMessage("grandpybot", data.second_message);
  };

  getAnswer =(message)=> {
    fetch("/update/", {
      method: 'POST',
      body: JSON.stringify(message)
    }).then(response => response.json())
        .then(this.writeMessage)
        .catch();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="chatbox">
            <Messages messages={this.state.message}/>
          </div>
          <Form getMessage={this.getMessage}
                getAnswer={this.getAnswer}/>
        </header>
      </div>
    );
  }
}

export default Main;
