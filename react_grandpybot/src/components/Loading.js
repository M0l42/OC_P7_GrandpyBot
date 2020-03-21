import React, { Component } from 'react'

class Loading extends Component {
    // Show a bootstrap loading animations when Grandpy is 'thinking'
    render() {
        const status = this.props.status;

        if(status== 'Loading'){
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }
        // Can't return nothing, and html comments seems not ok
        return (<div></div>)
  }
}

export default Loading;
