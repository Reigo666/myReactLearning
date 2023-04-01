import React, { Component } from 'react'
import Count from './containers/Count'
import Get from './containers/Get'
import store from './redux/store'
export default class App extends Component {
  
  render() {
    
    return (
      <div>
        <Count store={store}/>
        {/* <Get store={store} /> */}
      </div>
    )
  }
}
