console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

var cardThree = cards[1];
cardsInPlay.push(cardThree);

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You Found A Match!");
} else {
	alert("Sorry, try again.");
}