hit17 = true;
surrender = false;
resplitTo4 = true;
resplitTo2 = true;
resplitAces = true;
doubleAfterSplit = false;
doubleOnly91011 = false;
otherPlayers = 2;
// A whole game
var Game = function(tableMin,numDecks,otherPlayers,hit17,surrenderAvail,resplitTo4,resplitTo2,resplitAces,doubleAfterSplit,doubleOnly91011){
	this.otherPlayers = otherPlayers;
	this.minWager = tableMin;
	this.numDecks = numDecks
	this.deck = new Deck(this.numDecks);
};
Game.prototype.newDeck = function(){
	this.deck = new Deck(this.numDecks);
}