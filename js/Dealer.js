var Dealer = function(gameName){
	hit17 = gameName.hit17;
	//etc.
}
Dealer.prototype.dealerPlay = function(){
	that = this;
	var handLength = 2;
	var cardImages = [that.holeCard,that.hand.cards[1].fullName];
	printImage(cardImages,"dealer");
		setTimeout(function(){
			while (that.hand.addUpScore<17){
				handLength++;
				that.hand.hit();
				printImage(cardImages.append(that.hand.cards[handLength-1].fullName),"dealer");
			}
		},1000);
			return that.hand.sum;

	}
Dealer.prototype.dealToDealer = function(deckName){
	this.hand = new Hand(deckName,undefined,undefined,undefined,"dealer");
	this.holeCard = this.hand.cards[0].fullName;
	printImage(["red_full_portrait",this.hand.cards[1].fullName],"dealer");
}
Dealer.prototype.dealerReveal = function(){
	printImage([this.holeCard,this.hand.cards[1].fullName],"dealer");
}