import React, { Component } from 'react'
import Item from '../Item/Item'
import './index.css'
export default class List extends Component {
  render() {
    const {users}=this.props
    console.log(users)
  
  
    return (
        <div className="row">
            {
              users.map((userObj)=>{
                const user={userObj:userObj}
                return <Item {...user}/>
              })
            }
        </div>
    )
  }
}
