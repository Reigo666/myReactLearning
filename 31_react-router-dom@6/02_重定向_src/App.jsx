import React, { Component } from 'react'
import {Route,NavLink,Routes,Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
        <div>
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                    <h2>React Router Demo</h2>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    
                    <NavLink className="list-group-item" to='/about'>About</NavLink>
                    <NavLink className="list-group-item" to='/home'>Home</NavLink>
                </div>
            </div>

            <div className="col-xs-6">
                <div className="panel">
                    <div className="panel-body">
                        {/* 必须要用Routes包裹Route */}
                        <Routes>
                            {/* caseSensitive大小写敏感 */}
                            <Route path='/about' element={<About/>} caseSensitive/>
                            <Route path='/home' element={<Home/>}/>
                            {/* 当匹配到空时 Navigate to /about */}
                            <Route path='/' element={ <Navigate to="/about"/> } />
                        </Routes>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
