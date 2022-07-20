import React, { Component } from "react";
class State extends Component{
    constructor (props){
        super(props)
        this.state ={
            count:0,
            title :'',
        }
    }
    render(){
        const plus =()=>{
            this.setState({count : this.state.count + 1})
        };
          const minus =()=>{
            this.setState({count : this.state.count - 1})
        } 
        const changeInput = (event) =>{
            this.setState({title : event.target.value})
        }

        return(
            <div>
                <h1>State</h1>
                <h1>Count : {this.state.count}</h1>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <hr />
                <h1>Title {this.state.title}</h1>
                <input onChange={changeInput} type="text" />
            </div>
            )
    }
}
export default State
