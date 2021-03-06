import React, { Component } from 'react'

class Form extends Component{
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    };

    handleSubmit =(event)=>{
        // Add the submitted message to the list of messages
        this.props.writeMessage("user", this.state.message);
        this.props.getAnswer(this.state.message);
        this.state.message='';
        event.preventDefault()
    };

    render(){
      return(
          <form onSubmit={this.handleSubmit}>
              <div className="w-auto d-flex">
                  <input
                    className="form-control input-lg"
                    type='text'
                    value={this.state.message}
                    onChange={this.handleMessageChange}>
                  </input>
                  <button type="submit"><img src={process.env.PUBLIC_URL + '/send.png'} /></button>
              </div>
          </form>
      )
    }
}

export default Form
