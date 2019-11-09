// console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
	} else {
  	console.log("Sorry, try again.");
}
}
   //moving on but something here is causing it to come up twice
function flipCard(cardId) {
	console.log("User flipped " + cardId);
	cardsInPlay.push(cardId);

checkForMatch();
/*
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You Found A Match!");
} else {
	alert("Sorry, try again.");
}*/
};

flipCard(cards[0]);
flipCard(cards[2]);
//flipCard(cards[3]);
//cardsInPlay.length;
