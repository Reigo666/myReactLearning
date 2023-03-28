import axios from 'axios'
import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class Search extends Component {


  
  
  

  // 点击搜索后在github中搜索相关名字和头像
  search=async()=>{
    // 得到搜索框中的词keyWord
    const {keyWordElement:{value:keyWord}}=this

    //搜索前更改isFirst isLoading状态
    // updateAppState({isFirst:false,isLoading:true})
    PubSub.publish('Search_to_List',{isFirst:false,isLoading:true})

    // //使用axios发送消息
    // axios.get(`http://localhost:3000/api1/users?q=${keyWord}`).then(
    //   response => {
    //     console.log('成功了',response.data);
    //     //搜索成功后更改isLoading状态
    //     // updateAppState({isLoading:false,users:response.data.items})
    //     PubSub.publish('Search_to_List',{isLoading:false,users:response.data.items})
    //   },
    //   error => {
    //     console.log('失败了',error);
    //     //搜索失败后更改isLoading,err状态
    //     // updateAppState({isLoading:false,err:error.message})
    //     PubSub.publish('Search_to_List',{isLoading:false,err:error.message})
    //   }
    // )

    //发送网络请求 使用fetch发送消息(未优化)
    // fetch(`http://localhost:3000/api1/users?q=${keyWord}`).then(
    //   response => {
    //     console.log('连接服务器成功了',response);
    //     return response.json()
    //   },
    //   error => {
    //     console.log('连接服务器失败了',error);
    //     return new Promise(()=>{})
    //   }
    // ).then(
    //   response => {
    //     console.log('请求数据成功了',response);
    //   },
    //   error => {
    //     console.log('请求数据失败了',error);
    //   }
    // )

    //发送网络请求 使用fetch发送消息(优化)
    // fetch(`http://localhost:3000/api1/users?q=${keyWord}`).then(
    //   response => {
    //     console.log('连接服务器成功了',response);
    //     return response.json()
    //   }
    // ).then(
    //   response => {
    //     console.log('请求数据成功了',response);
    //   }
    // ).catch(
    //   error=>{console.log('请求出错',error);}
    // )

    //发送网络请求 使用fetch发送消息(优化优化)
    try {
      const response=await fetch(`http://localhost:3000/api1/users?q=${keyWord}`)
      const data=await response.json()
      console.log('请求数据成功了',data);
    } catch (error) {
      console.log('请求失败',error);
    }
    
    
  }

  render() {
    return (
        <section className="jumbotron album">
            <h2 className="jumbotron-heading">Search Github Users</h2>
            <div>
                <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
        </section>
    )
  }
}
