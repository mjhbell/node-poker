var poker = require('node-poker');


function Hand(){
	this.cards = new Array();
};

hands = new Array();

hand1 = new Hand();
hand2 = new Hand();

hand1.cards[0] = 'AD';
hand1.cards[1] = 'AS';
hand1.cards[2] = 'AC';
hand1.cards[3] = 'AH';
hand1.cards[4] = 'KD';
hand1.cards[5] = '7D';
hand1.cards[6] = '4D';
hands[0] = hand1;

hand2.cards[0] = 'AD';
hand2.cards[1] = 'KS';
hand2.cards[2] = 'QC';
hand2.cards[3] = 'JH';
hand2.cards[4] = 'TD';
hands[1] = hand2;

console.log(poker.RankHands(hands));