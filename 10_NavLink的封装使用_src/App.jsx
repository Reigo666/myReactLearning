import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                    <h2>React Router Demo</h2>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    {/* 原生html中 靠<a>跳转不同的页面 */}
                    {/* <a href="./about.html" className="list-group-item active">About</a>
                    <a href="./home.html" className="list-group-item">Home</a> */}

                    {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                    {/* <NavLink  activeClassName='demo' className="list-group-item" to='/about'>About</NavLink>
                    <NavLink  activeClassName='demo' className="list-group-item" to='/home'>Home</NavLink> */}

                    {/* 使用封装NavLink */}
                    <MyNavLink to='/about'>About</MyNavLink>
                    <MyNavLink to='home'>Home</MyNavLink>
                </div>
            </div>

            <div className="col-xs-6">
                <div className="panel">
                    <div className="panel-body">
                        <Route path='/about' component={About}/>
                        <Route path='/home' component={Home}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
