const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use('/', express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);


    socket.on('from_client', () => {
        console.log("event coming from client");
    })

    setInterval(() => {
        socket.emit('from_server');
    }, 2000);

  });

server.listen(3001, () =>{
    console.log('Server started');
});
