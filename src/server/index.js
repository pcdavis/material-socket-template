const app = require('http').createServer()
const io = module.exports.io =require('socket.io')(app)

const port = process.env.port || 3231;

const socketManager = require('./SocketManager');

io.on('connection', socketManager);

app.listen(port, () => { 
    console.log(`You are connected to port: ${port}`)
});

