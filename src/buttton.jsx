import React, { Component } from 'react'

class Buttton extends Component {
  render() {
    return (
      <div>
        <span style={ {background: "yellow", padding : "20px", height:"100px"}}>{this.props.children}</span>
      </div>
    )
  }
}
export default Buttton