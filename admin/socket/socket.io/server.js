const express = require('express');
const app = express();
const server = require('http').Server(app);
//将express服务器和http服务器做结合
let io = require('socket.io')(server);
//创建socket对象
app.use(express.static(__dirname+'/static'))
app.get('/sendReward',(req,res)=>{
    sendAll()
    res.send('中奖信息发送ok')
})
let clients=[]
io.on('connection',(client)=>{
    clients.push(client)
    client.on('backApi',(msg)=>{
        //client客户端连接对象
        console.log('客户端连接')
        // client.emit('hehe','欢迎光临')
        // 触发前端监听的自定义事件
        console.log(msg)
    })
})

function sendAll(){
    for (let index = 0; index < clients.length; index++) {
        const element = clients[index];
        element.emit('reward','恭喜中奖')
        
    }
}
server.listen(8081,()=>{
    console.log('服务器启动')
});