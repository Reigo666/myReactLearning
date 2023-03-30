import React, { Component } from 'react'


export default class Count extends Component {
    state={
        count:0
    }
    increment=()=>{
        const {value}=this.selectNumberElement
        const {count}=this.state
        this.setState({count:count+value*1})
    }
    decrement=()=>{
        const {value}=this.selectNumberElement
        const {count}=this.state
        this.setState({count:count-value*1})
    }
    incrementIfOdd=()=>{
        const {count}=this.state
        if(count%2===0)return;
        const {value}=this.selectNumberElement
        this.setState({count:count+value*1})
    }
    incrementAsync=()=>{
        setTimeout(()=>{
            this.increment()
        },500)
    }
  render() {
    const {count}=this.state
    return (
      <div>
        <h1>当前求和为{count}</h1>
        <select ref={c=>this.selectNumberElement=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        &nbsp;<button onClick={this.increment}>+</button>
        &nbsp;<button onClick={this.decrement}>-</button>
        &nbsp;<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        &nbsp;<button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
