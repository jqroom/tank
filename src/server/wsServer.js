const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 1991,
    verifyClient: () => {
        return true;
    }
});

wss.on('connection', (ws, req) => {
    console.log('WebSocket 已连接');
    ws.onmessage = (msg) => {
        console.log(`server接受到数据: ${msg.data}`);
        ws.send('hello');
    };
});
