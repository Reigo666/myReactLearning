import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h2>这是Parent组件</h2>
        {/* B组件作为A组件的第一种方式,缺点无法向子类传入A中的状态 */}
        {/* <A>
            <B/>
        </A> */}

        <A render={data=><B carName={data}/>}/>
      </div>
    )
  }
}

class A extends Component {
    state={carName:'奥迪c63'}
    render() {
      const {carName}=this.state
      return (
        <div className='a' >
          <h2>这是A组件</h2>
          <h3>车名是{carName}</h3>
          {/* 第一种方式 */}
          {/* {this.props.children} */}

          {/* 第二种方式 */}
          {/* 插槽技术 预留一个位置，可以随时插入想要的组件*/}
          {/* 父类向子类传递一个函数，子类将数据通过调用该函数传递出去，函数再return一个新的组件作为子类在这里显示 */}
          {this.props.render(carName)}
        </div>
      )
    }
  }
  
  class B extends Component {
    render() {
      const {carName}=this.props
      return (
        <div className='b' >
          <h2>这是B组件</h2>
          <h3>车名从A组件传入,车名是{carName}</h3>
        </div>
      )
    }
  }
  