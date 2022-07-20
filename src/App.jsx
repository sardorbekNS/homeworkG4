import React from "react";
class Student extends React.Component{
  render(){
    return (
    <div> 
      <h3>Student</h3>
      <h1> {this.props.eshmat}is IT Academy</h1>
      <h1>address : {this.props.addres}</h1>
    </div>
)  }
}


export default Student