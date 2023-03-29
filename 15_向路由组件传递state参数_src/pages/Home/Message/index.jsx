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
                                    {/* 向路由组件传递params参数*/}
                                    {/* <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link> */}

                                    {/* 向路由传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link> */}

                                    {/* 
                                        向路由传递state参数 
                                            1.路由链接(携带参数) 
                                            2.注册路由(无需声明，正常注册即可)
                                            3.接收参数:this.props.loaction.state
                                            4.备注:刷新可以保留住参数
                                    */}
                                    <Link to={{pathname:'/home/message/detail',state:{id:messageObj.id,title:messageObj.title} }}>{messageObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 注册路由 */}

                {/* 向路由组件传递params参数*/}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}

                {/* 向路由传递search参数*/}
                {/* <Route path='/home/message/detail' component={Detail}/> */}

                {/* 向路由传递state参数*/}
                <Route path='/home/message/detail' component={Detail}/>
            </div>
        
        )
    }
}
