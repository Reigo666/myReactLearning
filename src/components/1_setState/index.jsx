import React, { Component } from 'react'

export default class Demo extends Component {
    state={count:0}

    add=()=>{
        //setState(stateChange,[callback])-------对象式的state
        // const {count} = this.state
        // this.setState({count:count+1})


        // (2).setState(updater,[callback])-------函数式的setState
        // updater的返回值为stateChange
        // callback在state更新完毕后执行
        this.setState((state,props)=>{
            return {count:state.count+1}
        },
        ()=>{
            console.log('state in callback',this.state);
        })
        //setState内部对state更新是异步的过程，直接输出会输出之前的state
        console.log('state',this.state);

    }

    render() {
        return (
        <div>
            <h2>当前加和为{this.state.count}</h2>
            <button onClick={this.add}>点我加1</button>
        </div>
        )
    }
    }
