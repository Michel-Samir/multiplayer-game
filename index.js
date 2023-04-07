const edgeMultiplay = require('edge-multiplay')();

console.log(process.env.PORT);
edgeMultiplay.wsServer.on('newConnection', (path, connection)=>{
   edgeMultiplay.addLobby(connection)
})