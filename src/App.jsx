import React from "react";
class Student extends React.Component{
  render(){
    return (
    <div> <br /> <br />
      <h1> {this.props.eshmat}is IT Academy</h1>
      <h2>address : {this.props.addres}</h2>
      <a href="google.com"><h2>address : {this.props.addres}</h2></a>
      <hr />
    </div>  
)  }
}


export default Student
