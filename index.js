const edgeMultiplay = require('edge-multiplay')();

console.log(process.env.PORT);
console.log(process.env.PORT2);
console.log(process.env.PORT3);
edgeMultiplay.wsServer.on('newConnection', (path, connection)=>{
   edgeMultiplay.addLobby(connection)
})