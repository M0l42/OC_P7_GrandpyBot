import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";
import AutoscrolledList from "./components/AutoscrolledList";
import Grandpy from "./components/Grandpy"

function chooseImage(min, max) {
    return Math.floor(min + (Math.random() * (max-min)));
}

class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      status: "OK",
      message: [
          {"author": "grandpybot",
           "message": "Salut mon chou, en quoi puis-je t'aider?"}],
      data : null,
      img: chooseImage(1,4),
      img_location: "other"
    };
  }

  writeMessage =(user, userMessage, url)=> {
    // Add the new message to the List of messages
    const newMessage = {
      "author": user,
      "message": userMessage,
      "url": url,
    };

    this.setState({
      message: [...this.state.message, newMessage]
    });
  };

  writeMap =(data)=> {
    // Add the Map to the list of messages between the address and the anecdote
    const newMessage = {
      "author": "grandpybot",
      "img": data.url,
      "message": "",
    };

    this.writeMessage("grandpybot", this.state.data.first_message, '');
    this.setState({
      message: [...this.state.message, newMessage]
    });
    this.writeMessage("grandpybot", this.state.data.second_message, this.state.data.url);
  };

  handleMessage =(data)=>{
    // Handling the data we just got
    // And write the message and if needed, get the map
    this.state.data = data;
    if(this.state.data.status == 'OK'){
      this.state.status="OK";
      this.getMap(data.address, data.location);
      this.state.img = data.img + 1;
      this.state.img_location = 'anecdote'
    }
    else {
      this.state.status = data.status;
      this.writeMessage("grandpybot", this.state.data.error_message);
      this.setState(()=> {
        return {img: this.state.data.error_img + 1, img_location: 'failure'}
      });
    }
  };

  getAnswer =(message)=> {
    // AJAX call to the server
    this.setState(()=>{
      return {status: "Loading", img: 1, img_location: 'loading'}
    });
    fetch("/update/", {
      method: 'POST',
      body: JSON.stringify(message)
    }).then(response => response.json())
        .then(this.handleMessage)
        .catch();
  };

  getMap =(address, location)=> {
    // Call to the Google Map api
    this.state.success = false;
    const API_KEY = "AIzaSyBsl71VK0vPiuXN-OO1skM9lvYXCGI6pRI";
    let mapsURL = "https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=300x300&center=" + address;
    let marker = "&markers=color:blue7Clabel:S%7C" + location.lat + ',' + location.lng;
    fetch(mapsURL + marker + "&key=" + API_KEY)
        .then(response => response)
        .then(this.writeMap)
        .catch();
    };

  render() {
    return (
      <div className="App-content d-flex">
          <div className="card bg-secondary p-3">
            <AutoscrolledList
              items={this.state.message}
              status={this.state.status}
            />
            <Form writeMessage={this.writeMessage}
                  getAnswer={this.getAnswer}/>
          </div>
          <div className="ml-5">
            <Grandpy img={this.state.img}
                  location={this.state.img_location}/>
          </div>
      </div>
    );
  }
}

export default Main;
