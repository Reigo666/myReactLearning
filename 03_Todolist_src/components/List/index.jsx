import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
import PropTypes from 'prop-types'
export default class List extends Component {

  static propTypes={
    todos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired
  }

  render() {
    const {todos,updateTodo,deleteTodo}=this.props

   
    return (
        <ul className="todo-list">
          {
            todos.map((todo,index)=>{
              return <Item {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} key={todo.id}/>
            })
          }
          
        </ul>
    )
  }
}
