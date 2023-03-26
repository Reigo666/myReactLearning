const { default: axios } = require('axios');
const express=require('express')
const app=express()

app.use((request,response,next)=>{
    console.log('有人请求github服务器');
    console.log('请求来自',request.headers.referer);
    // console.log(request);
    next()
})

app.get('/users',(request,response1)=>{
    const search=request._parsedUrl.search;
    // console.log(search);
    let data=undefined;
    const users = [
        {id:'001',name:'奔驰',price:199},
        {id:'002',name:'马自达',price:109},
        {id:'002',name:'捷达',price:120}
    ]
    axios.get(`https://api.github.com/search/users${search}`).then(
        response => {
            console.log('访问github成功了,返回真实数据\n\n');
            data=response.data;
        },
        error => {
            console.log('访问github失败了,返回人造数据\n\n');
            data=users
        }
    ).then(
        response => {
            response1.send(data);
        }
    )
})

app.listen(5002,(err)=>{
    if(err)console.log(err);
    else{
        console.log('服务器github启动完成了,请求人物信息地址为:http://localhost:5002/users');
    }
})