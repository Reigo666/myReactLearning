import React, { Component ,useState,useEffect,createRef,useRef} from 'react'
import ReactDOM from 'react-dom'


// class Demo extends Component {

//     state={count:0}
//     myRef=createRef()
    
//     componentDidMount(){
//         this.timer=setInterval(()=>{
//             this.setState(state=>({count:state.count+1}))
//         },500)
//     }
//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//     // componentWillUnmount()
//     unmount=()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     add=()=>{
//         this.setState(state=>({count:state.count+1}))
//     }
//     show=()=>{
//         alert(this.myRef.current.value);
//     }

//     render() {

//         const {count}=this.state
//         return (
//         <div>
//             <h2>当前加和为{count}</h2>
//             <button onClick={this.add}>点我加1</button>
//             <button onClick={this.unmount}>点击卸载</button>
//             <input type="text" ref={this.myRef}/>
//             <button onClick={this.show}>点击提示数据</button>
//         </div>
//         )
//     }
// }

function Demo(){
    // 设置一个count的state 初值为0 只会被调用一次
    const [count,setCount]=useState(0)
    const myRef=useRef()

    useEffect(()=>{
        const timer=setInterval(()=>{
            //直接setCount(count+1)会产生错误 count值会一直为0
            //原因:当useEffect第二个参数为[]时,useEffect不再监听count值变化,形成一个闭包，count值将一直为0
            //即外部count值一直为零 下面的count值也一直为0 虽然state中的count被设定为1 但闭包中的count始终为0
            // setCount(count+1)

            //解决方案 使用updater形式传入真正的count值
            setCount(count=>count+1)
        },500)
        return ()=>{
            clearInterval(timer) //return一个函数 相当于componentWillUnmount
        } 
    },[])//监听值 当为空时相当于 componentDidMount 不为空时相当于 componentDidUpdate

    function add(){
        // count的两种写法 一种直接传要改变的值
        // setCount(count+1)

        //第二种传入一个函数，返回要改变的值，函数值默认传入参数为该state
        setCount(count=>count+1)
    }
    function show() {
        alert(myRef.current.value)
    }
    
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <h2>当前加和为{count}</h2>
            <button onClick={add}>点我加1</button>
            <button onClick={unmount}>点击卸载</button>
            <input type="text" ref={myRef}/>
            <button onClick={show}>点我展示数据</button>
        </div>
    )
    
}

export default Demo