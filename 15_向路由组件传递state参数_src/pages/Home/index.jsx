import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Redirect, Route,Switch } from 'react-router-dom'
import Message from './Message'
import News from './News'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>这是Home</h3>
        <div>
          {/* 导航区 */}
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          {/* 展示区 */}
          {/* 注册路由 
              一级路由不能开精准匹配
              1.注册子路由写上父路由的path值
              2.路由的匹配是按照注册路由的顺序进行的
          */}
          <Switch>
            <Route path='/home/news' component={News}/>
            <Route path='/home/message' component={Message}/>
            <Redirect to='/home/news'/>
          </Switch>
  

        </div>
      </div>
      
    )
  }
}
