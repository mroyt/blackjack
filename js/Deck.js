// Create a new Deck object, where number of decks can be specified
var Deck = function(numDecks){
	this.numCards = 52 * numDecks;
	this.deck = [];
	// Populate the deck array with cards 
	for (var card=0;card<this.numCards;card++){
		this.deck[card] = new Card(card + 1);
	}
	this.shuffle();
};

// Deal cards from the deck
Deck.prototype.deal = function(numOfCards,existingHand){
	if (arguments.length==1){
		existingHand = [];
	}
	else{
		existingHand = [existingHand];
	}
	for(i=0;i<numOfCards;i++){
		existingHand.push(this.deck.pop()); // Pops top card off the deck and pushes into myHand
	}
	return existingHand;

};
//from: https://github.com/coolaj86/knuth-shuffle/blob/master/index.js
Deck.prototype.shuffle = function(){
    var currentIndex = this.deck.length,temporaryValue,randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = this.deck[currentIndex];
		this.deck[currentIndex] = this.deck[randomIndex];
		this.deck[randomIndex] = temporaryValue;
    }
  };
