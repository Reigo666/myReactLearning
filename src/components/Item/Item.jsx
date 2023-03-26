import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    const {userObj}=this.props
    return (
        <div className="card">
            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                <img src={userObj.avatar_url} alt='head_portrait' style={{width: '100px'}}/>
            </a>

            <p className="card-text">{userObj.login}</p>
        </div>
    )
  }
}
