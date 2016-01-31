var Hand = function(deck,wager,handId,startingHand,playerName){
	this.deck = deck;
	this.sum = 0;
	this.handId = handId;
	this.playerName = playerName;
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
	if (wager != undefined){//if its a player (not the dealer)
		console.log("hand.cards is:");
		console.log(this.cards);
		printImage([this.cards[0].fullName,this.cards[1].fullName],this.playerName);
		this.wager = wager;
		this.sum = this.addUpScore();; //User can choose whether or not to have this visible. If sum>21, need to display bust alert
	}
};
Hand.prototype.endHand = function(){

}
// Returns the score of the hand
Hand.prototype.addUpScore = function(){
	var sum = 0;
	var aces = 0;
	for (var i=0;i<this.cards.length;i++){
		sum += this.cards[i].value;
		if (this.cards[i].ace){aces++;}
	}
	while (sum>21 && aces>0){//If you have aces, count them as 1 if sum is more than 21 
		sum-=10;
		aces--;
	}
	if (sum>21){
		this.busted();
	}
	else{
		printScore(sum,this.handId,this.playerName);
		return sum;	
	}
}
Hand.prototype.busted = function(){
	if (this.playerName=="dealer"){
		$("button#deal").prop("disabled",false);
		printScore("Dealer BUSTED",this.handId);
	}
	else{
		printScore("BUSTED",this.handId);
		$("button.busted").prop("disabled",true);
		$("button#deal").prop("disabled",false);
	}
}
//hand is an ARRAY. You need to call the first element in it to hit it. Otherwise, it's just trying to hit the array!
Hand.prototype.hit = function(){
	var that = this;
	setTimeout(function(){
		that.cards = that.deck.deal(1,that.cards);
		that.sum = that.addUpScore();
		var cardList="";
		var cardArr = [];
		for(i=0;i<that.cards.length;i++){
			cardList+=", "+(that.cards[i].fullName);
			cardArr.push(that.cards[i].fullName);
		}
		printImage(cardArr,that.playerName);
		console.log("Hand.cards is");
		console.log(that.cards);
		console.log("Hand.sum is");
		console.log(that.sum);
		return that.sum;
	},100);
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

