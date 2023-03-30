import React, { Component } from 'react'
import store from '../../redux/store'
import {createDecrementAction,createIncrementAction} from '../../redux/count_action'


export default class Count extends Component {
    increment=()=>{
        const {value}=this.selectNumberElement
        store.dispatch(createIncrementAction({value:value*1}))
        
    }
    decrement=()=>{
        const {value}=this.selectNumberElement
        store.dispatch(createDecrementAction({value:value*1}))
    }
    incrementIfOdd=()=>{
        const {count}=store.getState()
        if(count%2===0)return;
        this.increment()
    }
    incrementAsync=()=>{
        setTimeout(()=>{
            this.increment()
        },500)
    }
  render() {
    const state=store.getState()
    const {count}=state
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
