  import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log(this.props.name);
    let count = this.state.count;
    let str = [];
    if (count % 2 !== 0 && count % 3 !== 0 && count % 5 !== 0) {
      str.push("Tub son");
    } else if (count % 2 !== 0) {
      str.push("Toq son");
    } else {
      str.push("Juft son");
    }
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };
    return (
      <div>
        <button className="plusBtn" onClick={plus}>
          +
        </button>
        <span
          style={{
            background :  ` ${
              count % 2 !== 0 && count % 3 !== 0 && count % 5 !== 0
                ? "green"
                : count % 2 === 0
                ? "red"
                : "blue"
            }`,
            padding : "50px",
            margin : "30px 40px 40px 20px",
            borderRadius : '10px',
            
          }}
        >
          {this.state.count}
        </span>
        <button style={{width : "20px"}} className="minusBtn" onClick={minus}>
          -
        </button>
        <h2>{str}</h2>
      </div>
    );
  }
}

export default Counter;