// 引入express框架
const express=require('express') 
// 创建app服务对象
const app=express()

// 全局中间件
app.use((request,response,next)=>{
    console.log('有人请求服务器1了');
    console.log('请求来自于',request.get('Host'));
    console.log('请求的地址',request.url);
    next()
})

// 服务器1后端配置路由
app.get('/students',(request,response)=>{
    const students = [
        {id:'001',name:'tom',age:18},
        {id:'002',name:'jerry',age:19},
        {id:'002',name:'jerry',age:19}
    ]
    response.send(students)
})

app.listen(5000,(err)=>{
    if(!err) console.log('服务器1启动完成了,请求学生信息地址为:http://localhost:5000/students');
})