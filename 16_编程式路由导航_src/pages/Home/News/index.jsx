import React, { Component } from 'react'

export default class News extends Component {
  
  componentDidMount(){
    // 设置计时器自动跳转到message
    // setTimeout(()=>{
    //   this.props.history.push('/home/message')
    // },1000)
  }

  render() {
    return (
      <div>
        <ul>
            <li>news001</li>
            <li>news001</li>
            <li>news001</li>
        </ul>
      </div>
    )
  }
}
