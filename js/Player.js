// Create a new player
var Player = function(playerName,bankRoll,gameName){
	this.name = name;
	this.bankRoll = bankRoll;
	this.wager = gameName.minWager;
	this.hand = [];
};
Player.prototype.changeWager = function(newWager){
	this.wager = newWager;
}
Player.prototype.dealToPlayer = function(deckName,currentHand){
	//Not a split
	if (arguments.length == 1){
		this.hand[0] = new Hand(deckName,this.wager);
	}
	// A split
	else{
		this.hand = [new Hand(deckName,this.wager,currentHand), new Hand(deckName,this.wager,currentHand);
	}
}
Player.prototype.dealSplit = function(deckName,)
// Dealer object?
Player.prototype.Dealer = function(hit17){
	this.hit17 = hit17;
}