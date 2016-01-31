hit17 = false;//Does dealer hit on soft 17?
surrender = false;//Is surrender allowed?
resplitting = true;//Are you allowed to resplit after initial split?
resplitAces = true; //Are you allowed to resplit aces?
doubleAfterSplit = false;//Can you double-down after a split?
doubleOnly91011 = false;//Are you only allowed to double down on 9, 10, or 11?
otherPlayers = 2;//Number of other players at the table

// A whole game
var Game = function(tableMin,numDecks,otherPlayers,hit17,surrenderAvail,resplitTo4,resplitTo2,resplitAces,doubleAfterSplit,doubleOnly91011){
	this.otherPlayers = otherPlayers;
	this.minWager = tableMin;
	this.numDecks = numDecks
	this.deck = new Deck(this.numDecks);
	this.hit17 = hit17;
};
Game.prototype.newDeck = function(){
	this.deck = new Deck(this.numDecks);
};
Game.prototype.playerWinsHand = function(playerObj,handNumber){
	playerObj.bankRoll+=playerObj.hands[handNumber].wager;
}
Game.prototype.dealerWinsHand = function(playerObj,handNumber){
	playerObj.bankRoll-=playerObj.hands[handNumber].wager;
};

Game.prototype.decisionEngine = function(playerObj){
	for (i=0; i<playerObj.hands.length; i++){
		if ((dealer.hand.sum>playerObj.hands[i].sum && !dealer.hand.isBusted) || playerObj.hands[i].isBusted) {
			console.log("Dealer wins on hand "+i);
			this.dealerWinsHand(playerObj,i);
		}
		else if((dealer.hand.sum<playerObj.hands[i].sum || dealer.hand.isBusted) && !playerObj.hands[i].isBusted){
			console.log("Player wins on hand "+i);
			this.playerWinsHand(playerObj,i);
		}
		else {
			console.log("push on hand "+i);
		}
	}
}