// Create a new player
var Player = function(playerName,bankRoll,gameName){
	this.name = playerName;
	this.bankRoll = bankRoll;
	this.wager = gameName.minWager;
	this.hand = [];/*
	var player = this;
				console.log("player is: "+player.name);
	this.dealToPlayer = function(deckName,currentHand){
		//Not a split
		console.log("trying name: "+this.name);
		if (arguments.length == 1){
			console.log("player is: "+player.name);
			player.hand[0] = new Hand(deckName,this.wager);
		}
		// A split
		else{
			player.hand = [new Hand(deckName,this.wager,currentHand), new Hand(deckName,this.wager,currentHand)];
		}
	}*/
};
Player.prototype.changeWager = function(newWager){
	this.wager = newWager;
}
Player.prototype.dealToPlayer = function(deckName,currentHand){
	//Not a split
	if (arguments.length == 1){
		this.hands = [new Hand(deckName,this.wager,0,undefined,this.name)];
	}
	// A split
	else{
		this.hand = [new Hand(deckName,this.wager,currentHand), new Hand(deckName,this.wager,currentHand)];//Follow up - make sure Hand knows what to do with a 3rd arg
	}
}
//Player.prototype.dealSplit = function(deckName,)
// Dealer object?

