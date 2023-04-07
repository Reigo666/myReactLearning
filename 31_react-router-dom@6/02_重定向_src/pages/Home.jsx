import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function About() {
  const [count,setCount]=useState(1)

  function add(){
    setCount(2)
  }

  return (
    <div>
      <h2>这是Home组件</h2>
      {/* Navigate设置为replace模式 */}

      {count===2 ? <Navigate to="/about" replace={true}/> : <></>}
      <div>当前加和为{count}</div>
      <button onClick={add}>点我变为2</button>
    </div>
  )
}