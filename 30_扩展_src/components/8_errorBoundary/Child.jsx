import React, { Component } from 'react'

export default class Child extends Component {
    // state={persons:[
    //     {'id':'001',name:'小张',age:18},
    //     {'id':'002',name:'小王',age:19},
    //     {'id':'003',name:'peiqi',age:20},
    // ]}

    state={users:'abc'}
    render() {
        const {persons}=this.state

        return (
        <div>
            <h2>我是子组件</h2>
            {
                persons.map((personObj)=>{
                    return <div key={personObj.id}>{personObj.name}----{personObj.age}</div>
                })
            }
        </div>
        )
    }
    }
