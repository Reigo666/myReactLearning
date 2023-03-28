const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{ // 以/api1为前缀的请求，就会触发该代理配置
            target:'http://localhost:5002', //请求转发给谁
            changeOrigin:true, //控制服务器收到的请求头中Host字段的值 不加这句话:则origin为3000 当限制比较严格时会不传数据 加这句话origin为5000 则为自身向服务器发送数据
            pathRewrite:{'^/api1':''}
        })
    )
}