var poker = require('./lib/node-poker');

var table = new poker.Table(50,100,2,10,100,1000);

table.AddPlayer('bob',1000)
table.AddPlayer('jane',1000)
table.AddPlayer('dylan',1000)
table.AddPlayer('john',1000)

table.StartGame()

table.players[1].Call();
table.players[2].Call();
table.players[3].Call();
table.players[0].Call();
table.players[1].Call();
table.players[2].Call();
table.players[3].Call();
table.players[0].Call();
table.players[1].Call();
table.players[2].Call();
table.players[3].Call();
table.players[0].Call();
table.players[1].Call();
table.players[2].Call();
table.players[3].Call();
table.players[0].Call();

table.initNewRound()

console.log(table);