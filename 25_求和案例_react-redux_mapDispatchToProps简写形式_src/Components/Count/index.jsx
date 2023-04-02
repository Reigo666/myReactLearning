import React, { Component } from 'react'

export default class Count extends Component {
    increment=()=>{
        const {value}=this.selectNumberElement
        this.props.increment({value:value*1})
    }
    decrement=()=>{
        const {value}=this.selectNumberElement
        this.props.decrement({value:value*1})
    }
    incrementIfOdd=()=>{
        const {count}=this.props.countReducer
        if(count%2===0)return;
        this.increment()
    }
    incrementAsync=()=>{
        const {value}=this.selectNumberElement
        this.props.incrementAsync({value:value*1},500)
    }
  render() {
    console.log('CountUI中的props',this.props);
    const {count}=this.props.countReducer
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
