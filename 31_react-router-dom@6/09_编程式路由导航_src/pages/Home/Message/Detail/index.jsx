import React from 'react'
import { useLocation, useSearchParams} from 'react-router-dom'

export default function Deatil() {

    // 获得location参数 里面有search,state
    const {state:{id,title,content}}=useLocation()

    return (
        <ul>
            <li>消息编号:{id}</li>
            <li>消息标题:{title}</li>
            <li>消息内容:{content}</li>
        </ul>
    )
}
