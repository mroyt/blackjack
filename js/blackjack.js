var go = function(){
	deck1 = new Deck(2);
	game1 = new Game(5);
	michael = new Player("Michael",2000,game1);
	michael.dealToPlayer(deck1);
};

var printToScreen = function(text){
	document.getElementById("console").innerHTML = text;
}
var printScore = function(text){
	document.getElementById("points-sum").innerHTML = text;
}
var printImage = function(imgName){
//	$('#theDiv').prepend('<img id="theImg" src="theImg.png" />')
	
}