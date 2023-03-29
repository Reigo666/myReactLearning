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

                                    {/* 
                                        向路由传递search参数 
                                            1.路由链接(携带参数)
                                            2.注册路由(无需声明,正常注册即可)
                                            3.接收参数: const {search}=this.props.location
                                            4.备注:接收到的search是urlencoded编码字符串:需要借助qs(querystring)进行解析
                                    */}
                                    <Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 注册路由 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}
                <Route path='/home/message/detail' component={Detail}/>
            </div>
        
        )
    }
}
