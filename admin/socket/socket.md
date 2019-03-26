### socket 通信

#### net模块

serverCode
```js
const net = require('net')

const server = new net.createServer()

let clients = {}
let clientName = 0

server.on('connection', (client) => {
  client.name = ++clientName
  clients[client.name] = client

  client.on('data', (msg) => {
    // console.log('客户端传来：' + msg);
    broadcast(client, msg.toString())
  })

  client.on('error', (e) => {
    console.log('client error' + e);
    client.end()
  })

  client.on('close', (data) => {
    delete clients[client.name]
    console.log(client.name + ' 下线了');
  })
})

function broadcast(client, msg) {
  for (var key in clients) {
    clients[key].write(client.name + ' 说：' + msg)
  }
}

server.listen(9000)
```
clientCode

```js
var net = require('net')
const readline = require('readline')

var port = 9000
var host = '127.0.0.1'

var socket = new net.Socket()

socket.setEncoding = 'UTF-8'

socket.connect(port, host, () => {
  socket.write('hello.')
})

socket.on('data', (msg) => {
  console.log(msg.toString())
  say()
})

socket.on('error', function (err) {
  console.log('error' + err);
})

socket.on('close', function () {
  console.log('connection closeed');
})

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function say() {
  r1.question('请输入：', (inputMsg) => {
    if (inputMsg != 'bye') {
      socket.write(inputMsg + '\n')
    } else {
      socket.destroy()
      r1.close()
    }
  })
}

```
#### websocket


```js
const ws = new WebSocket('ws://localhost:8080/')

ws.onopen = () => {
  ws.send('大家好')
}

ws.onmessage = (msg) => {
  const content = document.getElementById('content')
  content.innerHTML += msg.data + '<br/>'
}

ws.onerror = (err) => {
  console.log(err);
}

ws.onclose = () => {
  console.log('closed~');
}
ws.send(msg2)
```

server.js

```js
const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8080 })

let clients = {}
let clientName = 0

ws.on('connection', (client) => {
  client.name = ++clientName
  clients[client.name] = client

  client.on('message', (msg) => {
    broadcast(client, msg)
  })

  client.on('close', () => {
    delete clients[client.name]
    console.log(client.name + ' 离开了~')
  })
})

function broadcast(client, msg) {
  for (var key in clients) {
    clients[key].send(client.name + ' 说：' + msg)
  }
}

```

#### socket.io

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>socket.io</title>
  <script src="socket.io.js" charset="utf-8"></script>
</head>
<body>
  <h1>gp6 交流区</h1>
  <div id="content" name="name" style="overflow-y: scroll; width: 400px; height: 300px; border: solid 1px #000"></div>
  <br />
  <div>
    <input type="text" id="msg" style="width: 200px;">
  </div>
  <button id="submit">提交</button>
  <script>
    var socket = io.connect('http://10.9.164.98:8081');
    const content = document.getElementById('content')
    document.querySelector('#submit')
      .addEventListener('click', function () {
        var msg2 = msg.value
        socket.emit('receive', msg2)
        msg.value = ''
        content.innerHTML += msg2 + '<br/>'
      }, false)

      socket.on('message', function(msg){
        content.innerHTML += msg + '<br/>'
      })
  </script>
</body>
</html>

```
server.js

```js
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/client'))

io.on('connection', function (socket) {
  setInterval(function () {
    socket.emit('list', 'abc')
  }, 1000)
  socket.broadcast.emit('list', 'test');
  socket.on('backend', (msg) => {
    console.log(msg);
  })

  socket.on('receive', (msg) => {
    socket.broadcast.emit('message', msg);
  })
});

server.listen(8081, '10.9.164.98');

```