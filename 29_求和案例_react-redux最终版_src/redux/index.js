
/* 
    引入RootReducer
*/


// 引入count的reducer
import count from './reducers/count'
import post from './reducers/post'
import persons from './reducers/person'

import {combineReducers} from 'redux'
// key:共享state的名字 val:该reducer
export default combineReducers({
    count,
    post,
    persons:persons
})