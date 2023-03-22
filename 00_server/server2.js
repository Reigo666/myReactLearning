// 引入express框架
const express=require('express') 
// 创建app服务对象
const app=express()

// 全局中间件
app.use((request,response,next)=>{
    console.log('有人请求服务器2了');
    next()
})

// 服务器2后端配置路由
app.get('/cars',(request,response)=>{
    const cars = [
        {id:'001',name:'奔驰',price:199},
        {id:'002',name:'马自达',price:109},
        {id:'002',name:'捷达',price:120}
    ]
    response.send(cars)
})

app.listen(5001,(err)=>{
    if(!err) console.log('服务器2启动完成了,请求汽车信息地址为:http://localhost:5001/cars');
})