import axios from 'axios'
import React, { Component } from 'react'
import './index.css'
export default class Search extends Component {
  // 点击搜索后在github中搜索相关名字和头像
  search=()=>{
    const {updateAppState}=this.props
    // 得到搜索框中的词keyWord
    const {keyWordElement:{value:keyWord}}=this

    //搜索前更改isFirst isLoading状态
    updateAppState({isFirst:false,isLoading:true})
    axios.get(`http://localhost:3000/api1/users?q=${keyWord}`).then(
      response => {
        console.log('成功了',response.data);
        //搜索成功后更改isLoading状态
        updateAppState({isLoading:false,users:response.data.items})
      },
      error => {
        console.log('失败了',error);
        //搜索失败后更改isLoading,err状态
        updateAppState({isLoading:false,err:error.message})
      }
        
    )
    
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
