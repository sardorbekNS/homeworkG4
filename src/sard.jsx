import React, { Component } from "react";

class InputVal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      click: false,
    };
  }
  render() {
    const Print = (e) => {
      this.setState({ inputVal: e.target.value });
    };
    const func = () => {
      this.setState({ click: !false });
    };
    return (
      <div>


        
        <input type="text" onChange={(e) => Print(e)} />
        <button onClick={func}>Click</button>
        <h1>{this.state.click ? this.state.inputVal : ""}</h1>
      </div>
    );
  }
}

export default InputVal;