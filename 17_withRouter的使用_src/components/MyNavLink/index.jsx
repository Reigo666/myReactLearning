import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    return (
        // this.props直接传入to 和 children(children直接是标签体内容)
        <NavLink  activeClassName='demo' className="list-group-item" {...this.props}/>
    )
  }
}
