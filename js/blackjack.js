//This is the stuff happening on the HTML page

var go = function(){
	deck1 = new Deck(2);
	game1 = new Game(5);
	michael = new Player("Michael",2000,game1);
	michael.dealToPlayer(deck1);
};

var printScore = function(text,handId,player){
	if (player=="dealer"){
		player="dealer-points-sum";
	}
	else{
		player="points-sum";
	}
	document.getElementById(player).innerHTML = text;
}
//Show image of card in the player's location, based on his name
var printImage = function(imgArray,player){
//	$('#theDiv').prepend('<img id="theImg" src="theImg.png" />')
	var cardHtml="";
	var location = "player";//When we figure out different players, we'll want to change this to locations based on player's name
	if (player=="dealer"){location="dealer";}
	for (i=0;i<imgArray.length;i++){
		var cardHtml = cardHtml + '<img class="cardImg" id="'+imgArray[i]+'" src="./images/'+imgArray[i]+'.png" />'; 
		document.getElementById(location).innerHTML = cardHtml;
	}
}