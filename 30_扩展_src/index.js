import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

// Provider为所有的App子组件传入了仓库

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
,document.getElementById('root'))

