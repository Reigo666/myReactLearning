import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state={hasError:''}

    //当Parent的子组件出现报错时，会触发getDerivedStateFromError的调用，并携带错误信息
    static getDerivedStateFromError(error){
        console.log('###',error);
        return {hasError:error}
    }

    componentDidCatch(){
        console.log('统计错误此处，反馈给服务器，用于通知编码人员进行bug的解决');
    }

    render() {
        return (
        <div>
            <h2>我是父组件</h2>
            {this.state.hasError ? <h2>当前网络不稳定，请稍后重试</h2> : <Child/>}
            
        </div>
        )
    }
}
