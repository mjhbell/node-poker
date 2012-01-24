var poker = require('node-poker');

var table = new poker.Table(10,20,2,10,'table_1',100,1000);

table.AddPlayer('bob',1000)
table.AddPlayer('jane',500)

table.players[0].Bet(10);
table.players[1].Bet(20);

table.players[0].Call();

console.log(table);