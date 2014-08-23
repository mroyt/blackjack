var Shoe = function(numDecks){
	this.shoe = this.gatherDecks(numDecks);
	this.shuffle = shuffle(this.shoe)
}
Shoe.prototype.deal = function(){

}
//create all the decks you need and put them in a single shoe together
Shoe.prototype.gatherDecks = function(numDecks){
	for (deck=0;deck<numDecks;deck++){
		var 
	}
	return shoe;
}


var Deck = function(){
	this.deck = [];
	this.shuffle = shuffle(this.deck);
	for (card=0;card<52;card++){
		this.deck[card] = card + 1;
	};
}


var Card = function(id,deck){
	this.parentDeck = deck;
	this.value = this.getValue(id);
	this.name = this.getName(id);
	this.ace = false;

}
//Return the BJ score of a card.
Card.prototype.getValue = function(id){
	if(this.getCardNumber(id)==="jack" || this.getCardNumber(id)==="queen" || this.getCardNumber(id)==="king"){
		return 10;
	}
	else if(this.getCardNumber(id)==="ace"){
		this.ace = true;
		return 1;
	}
	else{
		return id%13;
	}
}
//returns the value of the card (e.g., Ace, 5, 9, King, etc.)
Card.prototype.getCardNumber = function(id){
	if(id%13 === 1){
		return "ace";
	}
	else if(id%13 === 11){
		return "jack";
	}
	else if(id%13 === 12){
		return "queen";
	}
	else if(id%13 === 13){
		return "king";
	}
	else{
		return toString(id%13);
	}
}
//returns the complete name of the card
Card.prototype.getName = function(id){
		return toString(this.getCardNumber(id)) +"_of_"+ this.getSuit(id);
}
Card.prototype.getSuit = function(id){
	if(id<14){
		return "clubs";
	}
	else if (id<27){
		return "hearts";
	}
	else if (id<40){
		return "spades";
	}
	else{
		return "diamonds";
	}
}



var shuffle = function(array){
	//from: https://github.com/coolaj86/knuth-shuffle/blob/master/index.js
    var currentIndex = array.length,temporaryValue,randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
    }
  }