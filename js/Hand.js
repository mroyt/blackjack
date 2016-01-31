var Hand = function(deck,wager,handId,startingHand,playerName){
	this.deck = deck;
	this.sum = 0;
	this.handId = handId;
	this.playerName = playerName;
	this.isBusted = false;
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
	//if (playerName != "dealer"){ ACTUALLY, maybe this doesn't need to be a conditional?
	console.log("hand.cards for "+playerName+" is:");
	console.log(this.cards);
	printImage([this.cards[0].fullName,this.cards[1].fullName],this.playerName);
	this.wager = wager;
	this.sum = this.addUpScore(); //User can choose whether or not to have this visible. If sum>21, need to display bust alert
	//}
};

//hand is an ARRAY. You need to call the first element in it to hit it. Otherwise, it's just trying to hit the array!
Hand.prototype.hit = function(){
	//var that = this;
	this.cards = this.deck.deal(1,this.cards);
	this.sum = this.addUpScore();
	if (this.isBusted){
		dealer.dealerReveal();
	}
	var cardList="";
	var cardArr = [];
	for(i=0;i<this.cards.length;i++){
		cardList+=", "+(this.cards[i].fullName);
		cardArr.push(this.cards[i].fullName);
	}
	printImage(cardArr,this.playerName);
	return this.sum;
};

// Returns the score of the hand. AND busts you. Gotta separate this out.
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
		this.busted(this.playerName);
	}
	else{
		printScore(sum,this.handId,this.playerName);
	}
	return sum;	

}
Hand.prototype.busted = function(playerName){
	this.isBusted = true;
	printScore("BUSTED",this.handId,playerName);
	$("button.busted").prop("disabled",true);
	$("button#deal").prop("disabled",false);
}

Hand.prototype.double = function(){
	this.wager*=2;
	this.cards = this.hit();
	this.stand();
	//this.sum = this.addUpScore();
	//printToScreen(this.cards);//
	/*console.log(this.cards);
	printToScreen(this.sum);//
	console.log(this.sum);
	printToScreen("wager = "+"this.wager");//
	console.log("wager = "+this.wager);*/
};

Hand.prototype.surrender = function(){

};

Hand.prototype.stand = function(){
	$("button.busted").prop("disabled",true);
	dealer.dealerPlay();//apply Decision Engine function to this
	console.log(player);
	game.decisionEngine(player);
	$("button#deal").prop("disabled",false);
}

Hand.prototype.endHand = function(){

}
Hand.prototype.printHand = function(){
	//eventually, I need to be able to pull the printing function out of the Class initiation function above. 
	//That's a refactoring step later, where calling functions would need to tell the Hand to print. Not there yet.
}