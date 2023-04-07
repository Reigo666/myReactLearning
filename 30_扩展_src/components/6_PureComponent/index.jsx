import React, { Component ,PureComponent} from 'react'
import './index.css'
/* 
    Component存在的问题:
    1.父组件render后，子组件一定会render
    2.当当前组件props/state值无变化时，setState也会触发render

    解决方案(两种):
    1.使用shouldComponentUpdate(nextProps,nextState)中手动判断nextState,nextProps的值和原值是否有变化
    2.使用PureComponent会自动重写shouldComponentUpdate()方法检测props和state值的改变
*/
export default class A extends PureComponent {
    state={carName:'奔驰c63'}
    changeCarName=()=>{
        const state=this.state
        state.carName='迈巴赫'
        this.setState(state,()=>{
            console.log(this.state);
        })
        // this.setState({})
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState);
    //     for(let key in nextState){
    //         console.log(key,nextState[key],this.state[key]);
    //         if (nextState.key!==this.state.key){
    //             console.log('@@@');
    //             return true
    //         }
    //     }
    //     return false
    // }

    render() {
        console.log('parent--render');
        const {carName}=this.state
        return (
            <div className='parent'>
                <h2>这是A组件</h2>
                <h3>当前车名为{carName}</h3>
                <button onClick={this.changeCarName}>点击更改车名</button>
                <B carName={carName} />
            </div>
        )
    }
}

class B extends PureComponent {
    

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState);
    //     for(let key in nextProps){
    //         console.log(key,nextProps[key],this.props[key]);
    //         if (nextProps.key!==this.props.key){
    //             console.log('@@@');
    //             return true
    //         }
    //     }
    //     return false
    // }

    render() {
        const {carName}=this.props
        console.log('child--render');
        return (
            <div className='child'>
                <h2>这是B组件</h2>
                <h3>当前车名为{carName}</h3>
            </div>
        )
    }
  }
