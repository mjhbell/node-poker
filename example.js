var poker = require('node-poker');

var table = new poker.Table(50,100,2,10,'table_1',100,1000);

table.AddPlayer('bob',1000)
table.AddPlayer('jane',500)

table.players[0].Call();

console.log(table);