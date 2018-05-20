//  Array of cards
var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];

// Array to track how many cards are in play
var cardsInPlay = [];

// Checks if the rank of the two (clicked) card matches 
var checkForMatch = function () {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert('You found a match');
        } else {
            alert('Sorry. Try again');
        }
    }
}

// Flips the card
var flipCard = function () {
    var cardId = this.getAttribute('data-id'); // Get the data-id attribute, set by the createBoard function
    cardsInPlay.push(cards[cardId].rank); //  Add the clicked card to the 'cardsInPlay' array
    this.setAttribute('src', cards[cardId].cardImage); // Set the new 'flippled' imaged for the card
    console.log(`User flipped ${cards[cardId].rank}`);
 
    checkForMatch();
}

// Creates the board - Loads the initial cards / images to the HTML document
var createBoard = function () {
    for (var i = 0; i < cards.length; i += 1) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);

    }  
}

// Resets the board - Clears the array cardsInPlay and reset the card images
var resetBoard = function () {
    cardsInPlay = [];
    for (var i = 0; i < cards.length; i += 1) {
        newImage = document.getElementsByTagName('img')[i];
        newImage.setAttribute('src', 'images/back.png');
    }
}
document.getElementById('reset').addEventListener('click', resetBoard);

createBoard();

