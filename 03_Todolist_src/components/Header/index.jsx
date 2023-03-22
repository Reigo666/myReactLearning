import React, { Component } from 'react'
import './index.css'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
export default class Header extends Component {

  static propTypes={
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp=(event)=>{
    const {target,keyCode}=event
    if(keyCode!==13)return
    //判断是否为空
    if(target.value.trim()===''){
      target.value=''
      alert('输入的todo不能为空')
      return
    }
    //构建一个todo对象
    const todoObj={name:target.value,id:nanoid(),done:false}
    //添加一个todod对象
    this.props.addTodo(todoObj)
    //清空input
    target.value=''
  }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
  }
}
