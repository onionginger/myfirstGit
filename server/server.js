const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

// cors stuff
require('./listen.js')(http)
const cors = require('cors');
const io = require('socket.io')(http,{
	cors: {
	origin: "http://localhost:4200",
	methods: ["GET", "POST"],
	}
})
app.use(cors());


// sockets stuff
const sockets = require('./socket.js');
const server = require('./listen.js');



sockets.connect(io, 3000);

server.listen(http, 3000);
