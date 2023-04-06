import React, { Component ,createContext} from 'react'
import './index.css'
import { func } from 'prop-types'

const MyContext=createContext()
const {Provider,Consumer}=MyContext
export default class A extends Component {

  state={username:'张三',age:18}

  render() {
    const {username,age}=this.state
    return (
      <div className='parent'>
        <h2>我是A组件</h2>
        <h3>姓名:{username},年龄:{age}</h3>
        <Provider value={{username,age}}>
          <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  
  render() {
    return (
      <div className='child'>
        <h2>我是B组件</h2>
        <Consumer>
        {
          value=><h3>我从A组件接收到的姓名:{value.username},年龄:{value.age}</h3>
        }
        </Consumer>
        
        <C/>
      </div>
    )
  }
}


// class C extends Component {
//   // 类组件声明接手上下文(举手)
//   static contextType=MyContext
//   render() {
//     console.log(this.context);
//     const {username,age}=this.context
//     return (
//       <div className='grand'>
//         <h2>我是C组件</h2>
//         <h3>我从B组件接收到的姓名:{username},年龄:{age}</h3>
//       </div>
//     )
//   }
// }

function C() {
  return (
      <div className='grand'>
        <h2>我是C组件</h2>
        {/* 函数或类式组件都可以这么接收 */}
        <Consumer>
          {
            value=><h3>我从B组件接收到的姓名:{value.username},年龄:{value.age}</h3>
          }
        </Consumer>
        
      </div>
    )
}