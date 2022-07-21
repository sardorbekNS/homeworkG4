import React, { Component } from "react";
    
    class Button extends Component{
render(){
        return(
            <div style={{ width : "50px", height :"40px", border : "1px solid red"}}> hey 
                {this.props.children} 
            </div>
            )
    }}
export default Button
