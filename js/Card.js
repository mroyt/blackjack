var Card = function(id){
	this.id = id;
	this.value = this.getValue(id); //Gives the value of the card, with Ace=1
	this.name = this.getName(id);
	this.suit = this.getSuit(id);
	this.fullName = this.name+"_of_"+this.suit;//this.getName(id); //Gives the full name of the card
	this.ace = (this.getName(id)=="ace") ? true : false; //True if it's an ace
};
//Return the BJ score of a card.
Card.prototype.getValue = function(id){
	if(this.getName(id)==="jack" || this.getName(id)==="queen" || this.getName(id)==="king"){
		return 10;
	}
	else if(this.getName(id)==="ace"){
		return 11;
	}
	else{
		return id%13;
	}
};
//returns the value of the card (e.g., Ace, 5, 9, King, etc.)
Card.prototype.getName = function(id){
	//console.log("the id%13 is " + id%13);
	if(id%13 === 1){
		return "ace";
	}
	else if(id%13 === 11){
		return "jack";
	}
	else if(id%13 === 12){
		return "queen";
	}
	else if(id%13 === 0){
		return "king";
	}
	else{
		return id%13;
	}
};
Card.prototype.getSuit = function(id){
	if((id%52)<14){
		return "clubs";
	}
	else if ((id%52)<27){
		return "hearts";
	}
	else if ((id%52)<40){
		return "spades";
	}
	else{
		return "diamonds";
	}
};
