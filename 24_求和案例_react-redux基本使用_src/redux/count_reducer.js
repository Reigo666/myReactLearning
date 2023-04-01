/* 
    1.该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
    2.reducer函数会接到两个参数,分别为:之前的状态(preState),动作对象(action)
*/

import {INCREMENT,DECREMENT} from './constant'
const initState={count:0}
export default function countReducer(preState=initState,action){
    // 从action对象中获取type和data
    let {type,data}=action
    // 防止初始化data为undefined
    data=data || {}
    const {value}=data
    const {count}=preState
    console.log('countReducer中的',preState,action);
    switch (type) {
        case INCREMENT:
            return { count:count+value*1}
        case DECREMENT:
            return { count:count-value*1}
        default:
            return preState
    }
}