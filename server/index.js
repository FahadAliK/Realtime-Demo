const WebSocketServer = require('ws');
const wss = new WebSocketServer.Server({ port: '3000', path: '/api' }, () => {
	console.log('Server running on port 3000...');
});
wss.on('connection', (ws) => {
	console.log('Client has connected');
	setInterval(() => {
		ws.send(Math.random());
	}, 1);
	ws.on('close', (e) => {
		console.log('Client has disconnected');
	});
});
