import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'

export default function Message() {
    const messages=[
        {id:'001',title:'消息1',content:'锄禾日当午'},
        {id:'002',title:'消息2',content:'汗滴禾下土'},
        {id:'003',title:'消息3',content:'谁知盘中餐'},
        {id:'004',title:'消息4',content:'粒粒皆辛苦'},
    ]
    return (
        <div>
            <ul>
                {/* search参数传递方式 */}
                {
                    messages.map((m)=>{
                        return <li key={m.id}><NavLink to={`detail/?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</NavLink></li>
                    })
                }
            </ul>
            <Outlet/>
        </div>
    )
}
