import React, { Component } from 'react'
import {NavLink, useRoutes,useNavigate} from 'react-router-dom'

import routes from './routes'

export default function App() {
    // 根据路由表生成对应的路由规则
    const element=useRoutes(routes)
    const navigate=useNavigate()
    function forward(){
        navigate(1)
    }

    function back(){
        navigate(-1)
    }

    return (
        <div>
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                    <h2>React Router Demo</h2>
                    <button onClick={back}>后退</button>
                    <button onClick={forward}>前进</button>

                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    <NavLink className="list-group-item"  to='/about'>About</NavLink>
                    <NavLink className="list-group-item"  to='/home'>Home</NavLink>
                </div>
            </div>

            <div className="col-xs-6">
                <div className="panel">
                    <div className="panel-body">
                        {/* 必须要用Routes包裹Route */}
                        {/* <Routes>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/' element={ <Navigate to="/about"/> } />
                        </Routes> */}
                        {element}
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
