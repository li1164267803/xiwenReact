const WebSocket = require('ws')
const ws = new WebSocket.Server({port:8080},()=>{
    console.log('ws 服务器开启')
})

ws.on('connection',(client)=>{
    console.log('客户端连接')
    client.on('message',(msg)=>{
        //客户端发送的消息
        console.log('客户端发送消息',msg)
    })
    client.on('close',()=>{
        console.log('客户端断开连接')
    })
    client.on('close',()=>{
        // 客户端断开连接主动的删除
        // clients.filter((item)=>{
        //     if(item===client){
        //         return false
        //     }else{
        //         return true 
        //     }
        // })
        console.log('客户端断开连接')
    })
})