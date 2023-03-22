import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

  //用于处理全选/反选所有todo
  handleCheckAll=(event)=>{
    const {checkAllTodo}=this.props
    checkAllTodo(event.target.checked)
  }

  //用于清楚所有已经完成的todo
  handleClearAllDone=()=>{
    this.props.clearAllDone();
  }

  render() {

    const {todos}=this.props
    const doneCount=todos.reduce((pre,todoObj)=>{
      return pre+ (todoObj.done ? 1 : 0)
    },0)
    const total=todos.length

    return (
        <div className="todo-footer">
            <label>
                <input onClick={this.handleCheckAll} checked={doneCount===total && total} type="checkbox"/>
            </label>

            <span>
                <span>已完成{doneCount}</span>/ 全部{total}
            </span>

            <button onClick={this.handleClearAllDone}>清除已完成任务</button>
        </div>
    )
  }

}
