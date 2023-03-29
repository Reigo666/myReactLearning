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
    // 编程式路由导航 不一定需要点击来跳跃
    // 将页面推入历史记录展示
    pushShow=(id,title)=>{
        return ()=>{
            // push跳转+携带params参数
            // this.props.history.push(`/home/message/detail/${id}/${title}`)

            // push跳转+携带search参数
            // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

            // push跳转+携带state参数
            this.props.history.push(`/home/message/detail`,{id,title})
        }
    }

    // 将页面替换当前历史记录展示
    replaceShow=(id,title)=>{
        // replace跳转+携带params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace跳转+携带search参数
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

        // replace跳转+携带state参数
        this.props.history.replace(`/home/message/detail`,{id,title})
    }

    // 后退一级
    back=()=>{
        this.props.history.goBack()
    }

    // 前进一级
    forward=()=>{
        this.props.history.goForward()
    }

    // 前进或后退几级
    go=()=>{
        this.props.history.go(-2)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((messageObj)=>{
                            const {id,title}=messageObj
                            return(
                                <li key={messageObj.id}>
                                    {/* 向路由组件传递params参数*/}
                                    {/* <Link to={`/home/message/detail/${id}/${title}`}>{title}</Link> */}

                                    {/* 向路由传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${id}&title=${title}`}>{title}</Link> */}

                                    {/* 向路由传递state参数 */}
                                    <Link to={{pathname:'/home/message/detail',state:{id,title} }}>{title}</Link>

                                    &nbsp;&nbsp;<button onClick={this.pushShow(id,title)}>push查看</button>
                                    &nbsp;&nbsp;<button onClick={()=>this.replaceShow(id,title)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 注册路由 */}

                {/* 向路由组件传递params参数*/}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}

                {/* 向路由传递search参数*/}
                <Route path='/home/message/detail' component={Detail}/>

                {/* 向路由传递state参数*/}
                {/* <Route path='/home/message/detail' component={Detail}/> */}


                <button onClick={this.forward}>前进</button>
                <button onClick={this.back}>后退</button>
                <button onClick={this.go}>go</button>
            </div>
        
        )
    }
}
