function Deck(){
	this.cards = [52];

}

function Card(num,deck){
	this.parentDeck = deck;
	this.value = this.getValue(num);
	this.name = this.idCard(num);
}
Card.prototype.getValue = function(number){
	if(this.getName(number)==="jack" || this.getName(number)==="queen" || this.getName(number)==="king"){
		return 10;
	}
	else{
		return number%13;
	}
}
Card.prototype.getName = function(number){
	if(number%13 === 1){
		return "ace";
	}
	else if(number%13 === 11){
		return "jack";
	}
	else if(number%13 === 12){
		return "queen";
	}
	else if(number%13 === 13){
		return "king";
	}
	else{
		return toString(number);
	}
}
Card.prototype.idCard = function(number){
	if(number<14){
		return toString(this.getName(number)) +"_of_clubs";
	}
	else if (number<27){
		return toString(this.getName(number)) +"_of_hearts";
	}
	else if (number<40){
		return toString(this.getName(number)) +"_of_spades";
	}
	else{
		return toString(this.getName(number)) +"_of_diamonds";
	}
}