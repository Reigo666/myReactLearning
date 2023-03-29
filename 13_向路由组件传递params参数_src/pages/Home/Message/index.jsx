import React, { Component } from 'react'
import Detail from './Detail'
import {Link,Route} from 'react-router-dom'
export default class Message extends Component {
    state={
        messageArr:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'}
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((messageObj)=>{
                            return(
                                <li key={messageObj.id}>
                                    {/* 
                                        向路由组件传递参数
                                            1.路由链接(携带参数)
                                            2.注册路由(声明接收)
                                            3.接受参数 const {id,title}=this.props.match.params
                                    */}
                                    <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 注册路由 */}
                <Route path='/home/message/detail/:id/:title' component={Detail}/>
            </div>
        
        )
    }
}
