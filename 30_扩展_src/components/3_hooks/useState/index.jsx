import React, { Component ,useState,useEffect} from 'react'
import ReactDOM from 'react-dom'


class Demo extends Component {

    state={count:0}

    add=()=>{
        this.setState(state=>({count:state.count+1}))
    }
    render() {

        const {count}=this.state
        return (
        <div>
            <h2>当前加和为{count}</h2>
            <button onClick={this.add}>点我加1</button>
        </div>
        )
    }
}

// function Demo(){
//     // 设置一个count的state 初值为0 只会被调用一次
//     const [count,setCount]=useState(0)

//     const add=()=>{
//         // count的两种写法 一种直接传要改变的值
//         // setCount(count+1)

//         //第二种传入一个函数，返回要改变的值，函数值默认传入参数为该state
//         setCount(count=>count+1)
//     }
    
//     return (
//         <div>
//             <h2>当前加和为{count}</h2>
//             <button onClick={add}>点我加1</button>
//         </div>
//     )
    
// }

export default Demo