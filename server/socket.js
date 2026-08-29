module.exports = {

	connect: function(io, PORT) {

		io.on('connection', (socket) => {
			console.log('user connection on port ', PORT);
			alert("new user just connected");
			socket.on('message',(message)=>{
				io.emit('message', message);
			})


		})

	}
}


