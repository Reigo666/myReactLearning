import React, { Component } from 'react'
import Item from '../Item/Item'
import './index.css'
export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err}=this.props
  
    return (
        <div className="row">
            { 
              //判断是否是第一次搜索
              isFirst ? <h2>欢迎使用,输入关键字,然后点击搜索</h2> :
              isLoading ? <h2>Loading....</h2> :
              err ? <h2>{err}</h2> :
              users.map((userObj)=>{
                const userObj_obj={userObj:userObj}
                return <Item key={userObj.id} {...userObj_obj}/>
              })
            }
        </div>
    )
  }
}
