import React, { Component } from 'react'
import List from './components/List/List'
import Search from './components/Search/Search'

export default class App extends Component {
  state={users:[]}
  setUsers=(users)=>{
    this.setState({users})
  }
  render() {
    return (
      <div>
        <div className="container">
            <Search setUsers={this.setUsers}/>
            <List users={this.state.users} />
        </div>
      </div>
    )
  }
}
