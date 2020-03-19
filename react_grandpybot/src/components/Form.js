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
        this.props.getMessage("user", this.state.message);
        this.props.getAnswer(this.state.message);
        this.state.message='';
        event.preventDefault()
    };

    render(){
      return(
          <form onSubmit={this.handleSubmit}>
              <div className="chatForm">
                  <input
                    className="form-control input-lg"
                    type='text'
                    value={this.state.message}
                    onChange={this.handleMessageChange}>
                  </input>
              </div>
          </form>
      )
    }
}

export default Form
