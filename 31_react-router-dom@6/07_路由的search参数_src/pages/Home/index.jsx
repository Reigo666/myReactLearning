import React, { useState } from 'react'
import { NavLink, Navigate,Outlet } from 'react-router-dom'

export default function About() {

  return (
    <div>
      
      <h2>这是Home组件</h2>
      <ul className="nav nav-tabs">
        <li>
          <NavLink className="list-group-item" to='/home/news'>News</NavLink>
        </li>
        <li>
          <NavLink className="list-group-item" to='/home/message/' >Message</NavLink>
        </li>
      </ul>


      
      <Outlet/>
    </div>
  )
}