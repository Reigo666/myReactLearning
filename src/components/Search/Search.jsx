import axios from 'axios'
import React, { Component } from 'react'
import './index.css'
export default class Search extends Component {
  search=()=>{
    const {setUsers}=this.props
    const {keyWordElement:{value:keyWord}}=this
    console.log(keyWord);
    axios.get(`http://localhost:3000/api1/users?q=${keyWord}`).then(
      response => {
        console.log('成功了',response.data);
        setUsers(response.data.items)
      },
      error => {console.log('失败了',error);}
    )
    
  }

  render() {
    return (
        <section className="jumbotron album">
            <h2 className="jumbotron-heading">Search Github Users</h2>
            <div>
                <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
        </section>
    )
  }
}
