import React, { Component } from 'react'
import qs from 'qs'

const DetailData=[
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，未来的自己'}
]
export default class Detail extends Component {
  
  render() {
    console.log(this.props);

    // 向路由组件传递params参数
    // const {id,title}=this.props.match.params
    
    //向路由组件传递search参数
    // const {search}=this.props.location
    // const detailObj=qs.parse(search.slice(1))
    // const {id,title}=detailObj

    // 向路由传递state参数
    const {id,title}=this.props.location.state

    const findObj=DetailData.find((detailObj)=>{
        return detailObj.id===id
    })
    const content=findObj.content
    
    
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{content}</li>
      </ul>
    )
  }
}
