const http = require('http').createServer();
const socket = require('socket.io');

// allow cors
const io = socket(http, {
    cors: {'origin': '*'}
});

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('message', (message) => {
        console.log(message);
        // send the message to all users
        io.emit('message', `${socket.id.substr(0,3)}: ${message}`);
    });
});

http.listen(3000, () => console.log('localhost:3000'));
