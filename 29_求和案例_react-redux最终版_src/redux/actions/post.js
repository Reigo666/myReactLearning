import axios from "axios"

// 同步更新数据
export function createPostAction(data){
    return {type:'LOAD_POSTS',data}
}

// 异步更新数据
export function createAsyncPostAction(){
    return (dispatch) => {
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
                (response)=>{
                    console.log('获取数据成功',response)
                    dispatch(createPostAction({json_data:response.data}))
                },
                (error)=>{console.log('异步更新数据失败',error);}
            )
        },1000)
    }
}
