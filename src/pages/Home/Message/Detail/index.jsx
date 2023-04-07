import React from 'react'
import { useLocation, useSearchParams} from 'react-router-dom'

export default function Deatil() {
    // search方法传递参数
    // search.get用于获取参数 setSearch用于改变参数
    const [search,setSearch]=useSearchParams()
    const id=search.get('id')
    const title=search.get('title')
    const content=search.get('content')


    // 获得location参数 里面有search
    // const x=useLocation()
    // console.log(x);
    return (
        <ul>
            <li>
                <button onClick={()=>{setSearch('id=008&title=abc&content=麻了')}}>点我改变消息</button>
            </li>
            <li>消息编号:{id}</li>
            <li>消息标题:{title}</li>
            <li>消息内容:{content}</li>
        </ul>
    )
}
