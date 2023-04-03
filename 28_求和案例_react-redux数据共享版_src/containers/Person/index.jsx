import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createAddPersonAction} from '../../redux/actions/person_action'
import { nanoid } from 'nanoid';
class PersonUI extends Component {

    addPerson=()=>{
        const name=this.nameNode.value;
        const age=this.ageNode.value;
        this.props.addPerson({id:nanoid(),name,age})
        this.nameNode.value=''
        this.ageNode.value=''
    }


    render() {
        const {persons,count}=this.props
        return (
        <div>
            <h2>这是一个Person组件,上面组件的值为{count}</h2>
            <input ref={c=>this.nameNode=c}type="text" placeholder='输入一个姓名'/>
            <input ref={c=>this.ageNode=c}type="text" placeholder='输入一个年龄'/>
            <button onClick={this.addPerson}>添加</button>
            <br/>
            <ul>
                {
                    persons.map((personObj)=>{
                        return <li key={personObj.id}>姓名--{personObj.name}  年龄--{personObj.age}</li>
                    })
                }
            </ul>
        </div>
        )
    }
}

export default connect(
    state=>({persons:state.persons,count:state.count}),//从store传进来的参数
    {addPerson:createAddPersonAction}//从store传进来的方法
)(PersonUI)