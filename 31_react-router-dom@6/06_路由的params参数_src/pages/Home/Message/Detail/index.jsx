import React from 'react'
import { useMatch, useParams } from 'react-router-dom'

export default function Deatil() {
    /* 使用useParams取出match中的params */
    // const params=useParams()
    // const {id,content,title}=params

    /* 使用useMatch取出match*/
    const match=useMatch('home/message/detail/:id/:title/:content')
    /* 取出match中的params */
    const params=match.params
    const {id,content,title}=params
    // console.log(params);
    return (
        <ul>
            <li>消息编号:{id}</li>
            <li>消息标题:{title}</li>
            <li>消息内容:{content}</li>
        </ul>
    )
}
