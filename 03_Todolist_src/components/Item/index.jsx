import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state={
    mouse_enter:false
  }

  //handleMouse用于处理鼠标移入移出事件
  handleMouse=(mouse_enter)=>{
    return (event)=>{
      this.setState({mouse_enter:mouse_enter})
    }
  }

  //handleCheck用于处理点击checkbox的操作(更改state中todos中done的状态)
  handleCheck=(id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked);
    }
  }

  //handleDelete用于处理点击删除按钮的事件
  handleDelete=(id)=>{
    return ()=>{
      if(window.confirm('确定删除么？')){
        this.props.deleteTodo(id)
      }
    }
  }
  render() {
    const {id,name,done}=this.props;
    const {mouse_enter}=this.state
    return (
        <li style={{backgroundColor:mouse_enter ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
            </label>

            <button onClick={this.handleDelete(id)} className='btn btn-danger' style={{display:mouse_enter ? 'block' : 'none'}}>删除</button>
        </li>
    )
  }
}
