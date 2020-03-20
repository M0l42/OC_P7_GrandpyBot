import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";
import AutoscrolledList from "./components/AutoscrolledList";
import Test from "./components/Grandpy"

function chooseImage() {
    let min = 1;
    let max = 4;
    return Math.floor(min + (Math.random() * (max-min)));
}

class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      status: "OK",
      message: [
          {"author": "grandpybot",
           "message": "Welcome !"}],
      data : null,
      img: chooseImage(),
      img_location: "other"
    };
  }

  getMessage =(user, userMessage)=> {
    const newMessage = {
      "author": user,
      "message": userMessage,
    };

    this.setState({
      message: [...this.state.message, newMessage]
    });
  };

  writeMap =(data)=> {
    const newMessage = {
      "author": "grandpybot",
      "img": data.url,
      "message": "",
    };

    this.getMessage("grandpybot", this.state.data.first_message);
    this.setState({
      message: [...this.state.message, newMessage]
    });
    this.getMessage("grandpybot", this.state.data.second_message);
  };

  writeMessage =(data)=>{
    this.state.data = data;
    if(data.status =='OK'){
      this.state.status="OK";
      this.getMap(data.adress, data.location);
      this.state.img = data.img + 1;
      this.state.img_location = 'anecdote'
    }
    else if(data.status == 'ZERO_RESULTS'){
      this.state.status = data.status;
      this.getMessage("grandpybot", data.error_message);
      this.setState(()=> {
        return {img: data.error_img + 1, img_location: 'failure'}
      });
    }
  };

  getAnswer =(message)=> {
    this.setState(()=>{
      return {status: "Loading"}
    });
    fetch("/update/", {
      method: 'POST',
      body: JSON.stringify(message)
    }).then(response => response.json())
        .then(this.writeMessage)
        .catch();
  };

  getMap =(adress, location)=> {
        this.state.success = false;
        const API_KEY = "AIzaSyBsl71VK0vPiuXN-OO1skM9lvYXCGI6pRI";
        let mapsURL = "https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=300x300&center=" + adress;
        let marker = "&markers=color:blue7Clabel:S%7C" + location.lat + ',' + location.lng;
        fetch(mapsURL + marker + "&key=" + API_KEY)
            .then(response => response)
            .then(this.writeMap)
            .catch();
    };

  render() {
    return (
      <div className="App-header d-flex">
          <div className="card bg-secondary p-3 m-5">
            <AutoscrolledList
              items={this.state.message}
              status={this.state.status}
              onScrolled={e => console.log("the list was scrolled!")}
              onScrolledTop={e => alert("scrolled to top!")}
            />
            <Form getMessage={this.getMessage}
                  getAnswer={this.getAnswer}/>
          </div>
          <div className="m-3">
            <Test img={this.state.img}
                  location={this.state.img_location}/>
          </div>
      </div>
    );
  }
}

export default Main;
