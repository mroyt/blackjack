var Dealer = function(gameName){
	var hit17 = gameName.hit17;
	//etc.
}
Dealer.prototype.dealToDealer = function(deckName){
	//Hand = function(deck,wager,handId,startingHand,playerName)
	this.hand = new Hand(deckName,undefined,undefined,undefined,"dealer");
	this.holeCard = this.hand.cards[0].fullName;
	printImage(["red_full_portrait",this.hand.cards[1].fullName],"dealer");
}
Dealer.prototype.dealerReveal = function(){
	printImage([this.holeCard,this.hand.cards[1].fullName],"dealer");
}

//player stands (or busts?); dealer is going to play or simply reveal card if player busted
Dealer.prototype.dealerPlay = function(){
	var thisDealer = this;
	var handLength;
	var cardImages = [thisDealer.holeCard,thisDealer.hand.cards[1].fullName];
	printImage(cardImages,"dealer");
	while (thisDealer.hand.addUpScore()<17){
		handLength = thisDealer.hand.cards.length;
		thisDealer.hand.hit();
		printImage(cardImages.push(thisDealer.hand.cards[handLength-1].fullName),"dealer");
	};
	console.log("Dealer's sum: "+thisDealer.hand.sum);
	
	return thisDealer.hand.sum;
	}