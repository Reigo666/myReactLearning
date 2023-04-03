import React, { Component } from 'react'
import axios from 'axios'
import store from '../../redux/store'
import {createAsyncPostAction} from '../../redux/post_action'
export default class Get extends Component {
    getPostsRequest=() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
            (response)=>{return response.data},
            (error)=>{console.log('获取数据失败',error);}
        )
    }

    updateData=() => {
        store.dispatch(createAsyncPostAction())
    }   
    render() {
        const state=store.getState().postReducer
        console.log('Get中的state',state);
        const {json_data}=state
        const show=JSON.stringify(json_data)
        return (
        <div>
            <button onClick={this.updateData}>更新数据</button>
            <div>展示数据</div>
            <div>{show}</div>
        </div>
        )
    }
}
