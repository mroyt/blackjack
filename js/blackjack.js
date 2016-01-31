//This is the stuff happening on the HTML page

var go = function(){
	deck1 = new Deck(2);
	game1 = new Game(5);
	michael = new Player("Michael",2000,game1);
	michael.dealToPlayer(deck1);
};

/*var printToScreen = function(text){
	document.getElementById("console").innerHTML = text;
}*/
var printScore = function(text,handId,player){
	player="points-sum";
	if (player=="dealer"){player="dealer-points-sum";}
	document.getElementById(player).innerHTML = text;
}
var printImage = function(imgArray,player){
//	$('#theDiv').prepend('<img id="theImg" src="theImg.png" />')
	var cardHtml="";
	var location = "console";
	if (player=="dealer"){location="dealer-console";}
	for (i=0;i<imgArray.length;i++){
		var cardHtml = cardHtml + '<img class="cardImg" id="'+imgArray[i]+'" src="./images/'+imgArray[i]+'.png" />'; 
		document.getElementById(location).innerHTML = cardHtml;
	}
}