import React, { Component } from 'react'
import './index.css'
export default class Search extends Component {
  render() {
    return (
        <section className="jumbotron album">
            <h2 className="jumbotron-heading">Search Github Users</h2>
            <div>
                <input type="text" placeholder="enter the name you search"/>&nbsp;<button>Search</button>
            </div>
        </section>
    )
  }
}
