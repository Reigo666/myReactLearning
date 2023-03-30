import React, { Component } from 'react'
import Item from '../Item/Item'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  componentDidMount=() => {
    this.token=PubSub.subscribe('Search_to_List',(msg,stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount=() => {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users,isFirst,isLoading,err}=this.state
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
