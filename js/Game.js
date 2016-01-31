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
}

Game.prototype.decisionEngine = function(dealerObj,playerObj){
	for (i=0;i<playerObj.hands.length;i++){
		
	}
}