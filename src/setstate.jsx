import React, { Component } from 'react'

 class Setstate extends Component {
    constructor(props){
        super(props)
        this.state ={
            count : 0,
            names : [
              {id:1, name:"Nurbek"},
              {id:2, name:"Sardorbek"},
              {id:3, name:"Hasanboy"},
              {id:4, name:"Umar"},
            ]
        }
    }
    render() {
      // let res1 = "Nurbek"
      // let res2 = "Sardor"
      // let res3 = "Aziz"
      // let res4 = "Ahmad"
      // let res5 = "No Name"
 const plus = ()=>{
  this.setState({count : this.state.count +1})
  
 }
 const minus = ()=>{
   if (this.state.count > 0) {
    this.setState({count :this.state.count - 1})
  }

 }
    return (
      <div>
        <button onClick={plus}>+</button>
        <span  style={{background : `${this.state.count <= 3
          ? "red" 
          : this.state.count <=6
          ? "yellow" 
          : this.state.count <=9 
          ? "green" 
          : this.state.count <= 12 
          ? "blue" 
          : "grey" }`, fontSize:`${this.state.count <= 3
          ? "50px" 
          : this.state.count <=6
          ? "60px" 
          : this.state.count <=9 
          ? "100px" 
          : this.state.count <= 12 
          ? "500px" 
          : "80px"}`}}>setstate : {this.state.count}</span>
        <button onClick={minus}>-</button>
        
      </div>
    )
  }
}
export default Setstate