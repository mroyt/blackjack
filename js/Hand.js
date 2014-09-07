var Hand = function(deck,wager,startingHand){
	this.deck = deck;
	this.sum = 0;
	// This conditional checks to see if a starting hand was provided
	// (this would only be the case with a split)
	if (startingHand === undefined){
		this.cards = [];
		this.cards = this.deck.deal(2); //should return an array; should take the current hand and 1 card
	}
	else{
		this.cards = startingHand;
		this.cards = this.deck.deal(1,this.cards);

	}
	console.log(this.cards);
	printToScreen("Hand = "+this.cards[0].fullName+", "+this.cards[1].fullName);//
	this.wager = wager;
	this.sum = this.addUpScore();; //User can choose whether or not to have this visible. If sum>21, need to display bust alert

};
Hand.prototype.endHand = function(){

}
// Returns the score of the hand
Hand.prototype.addUpScore = function(){
	var sum = 0;
	for (var i=0;i<this.cards.length;i++){
		sum += this.cards[i].value;
	}
	return sum;
}
Hand.prototype.hit = function(){
	this.cards = this.deck.deal(1,this.cards);
	this.sum = this.addUpScore();
	var cardArr="";
	for(i=0;i<this.cards.length;i++){
		cardArr+=", "+(this.cards[i].fullName);
	}
	printToScreen(cardArr);//
	console.log(this.cards);
	printScore(this.sum);//
	console.log(this.sum);
};
Hand.prototype.double = function(){
	this.wager*=2;
	this.cards = this.deck.deal(1,this.cards);
	this.sum = this.addUpScore();
	printToScreen(this.cards);//
	console.log(this.cards);
	printToScreen(this.sum);//
	console.log(this.sum);
	printToScreen("wager = "+"this.wager");//
	console.log("wager = "+this.wager);
};
Hand.prototype.surrender = function(){

};

