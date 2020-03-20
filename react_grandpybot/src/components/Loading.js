import React, { Component } from 'react'

class Loading extends Component {
    render() {
        const status = this.props.status;

        if(status== 'Loading'){
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }
        return (<div></div>)
  }
}

export default Loading;
