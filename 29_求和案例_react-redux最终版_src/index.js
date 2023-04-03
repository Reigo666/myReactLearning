import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

// Provider为所有的App子组件传入了仓库
ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>,
document.getElementById('root'))

/* 
    1.引入react-redux后 无需再监听store中是否有状态改变来渲染画面 
    2.在container中的组件connect()()方法已经加入了对状态改变监听的渲染
*/
// store.subscribe(()=>{
//     ReactDOM.render(<App/>,document.getElementById('root'))
// })

