import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  state={todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:false},
    {id:'003',name:'打豆豆',done:true},
  ]}
  //addTodo用于添加一个todo对象
  addTodo=(todoObj)=>{
    let {todos}=this.state;
    todos.push(todoObj);
    this.setState({todos:todos});
  }

  //updateTodo用于更改一个todo对象
  updateTodo=(id,done)=>{
    let {todos}=this.state
    todos=todos.map((todoObj)=>{
      if(id===todoObj.id)return {...todoObj,done:done}
      return todoObj
    })
    this.setState({todos:todos})
  }

  //deleteTodo用于删除一个todo对象
  deleteTodo=(id)=>{
    let {todos}=this.state
    todos=todos.filter((todoObj)=>{
      return todoObj.id!==id
    })
    this.setState({todos:todos})
  }

  //checkAllTodo根据done值全选/反选所有todo对象
  checkAllTodo=(done)=>{
    let {todos}=this.state
    todos=todos.map((todoObj)=>{
      todoObj.done=done
      return todoObj
    })
    this.setState({todos})
  }

  //clearAllDone用于删除所有已完成的todo
  clearAllDone=()=>{
    let {todos}=this.state
    todos=todos.filter((todoObj)=>{
      return todoObj.done===false
    })
    this.setState({todos})
  }

  
  render() {
    const {todos}=this.state
    
    return (
      <div className="todo-container">
        <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
    </div>
    )
  }
}
