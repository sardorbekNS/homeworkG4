import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      str: "",
      str1: "",
      value: "",
    };
  }
  render() {
    const getValue = (e) => {
      this.setState({ str: e.target.value });
    };

    const getValue1 = (e) => {
      this.setState({ str1: e.target.value });
    };

    const getSelect = () => {
      this.setState({
        count: (this.state.value === "+" && +this.state.str + +this.state.str1)  
        (this.state.value === "-" && +this.state.str - +this.state.str1) 
        (this.state.value === "*" && +this.state.str * +this.state.str1) ||
        (this.state.value === "/" && +this.state.str / +this.state.str1)
      });
    };

    return (
      <div>
      <h1 style={{color:"red"}}>{this.state.count}</h1>

        <input
          type="text"
          style={{ width: "100px",height:"40px" ,marginRight:50,fontSize:"25px" }}
          onChange={(e) => getValue(e)}
        />

        <select
          name=""
          id=""
          onChange={(e) => this.setState({ value: e.target.value })}
        >
          <option value=""></option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          style={{ width: "100px",height:"40px" ,marginLeft:50,fontSize:"25px" }}
          onChange={(e) => getValue1(e)}
        />

        <button style={{marginLeft:50,width:"100px",height:"40px",backgroundColor:"cyan"}} onClick={getSelect}>=</button>
      </div>
    );
  }
}