import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";


class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      message: [
          {"author": "grandpybot",
           "message": "Welcome !"}]
    }
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
    this.getMessage("grandpybot", data.message);
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <p>My Token = {window.token}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="list-group">
            {
              this.state.message.map(item => {
                return(
                    <li className="list-group-item">
                      <div className={item.author}>
                        {item.message}
                      </div>
                    </li>
                )
              })
            }
            <Form getMessage={this.getMessage}
                  getAnswer={this.getAnswer}/>
          </div>
        </header>
      </div>
    );
  }
}

export default Main;
