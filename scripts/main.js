let dealerPoints = 0;
let playerPoints = 0;
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "ace", "jack", "queen", "king"];
let suit = ["clubs", "diamonds", "hearts", "spades"];



window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('new-game').disabled = true;
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    buildDeck();
   shuffleDeck();
})

function buildDeck() {
    deck = []

    for (let i = 0; i < rank.length; i++) {
        for (let j= 0; j < suit.length; j++) {
            deck.push(rank[i] + "_of_" + suit[j]);
        }
    }
    console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}


document.getElementById('deal-button').addEventListener('click', dealGame);

function dealGame () {
    for (let i = 0; i < 1; i++){
        let cardImg = document.createElement("img");
        let card = deck.shift();
        cardImg.src = "./images/" + card + ".png";
        playerPoints += calculatePoints(card);
        document.getElementById("player-hand").append(cardImg);
    }
    for (let i = 0; i < 1; i++){
        let cardImg = document.createElement("img");
        let hiddenCard = deck.shift();
        cardImg.src = "./images/back.png";
        dealerPoints += calculatePoints(hiddenCard);
        document.getElementById("dealer-hand").append(cardImg);
    }
    for (let i = 0; i < 1; i++){
        let cardImg = document.createElement("img");
        let card = deck.shift();
        cardImg.src = "./images/" + card + ".png";
        playerPoints += calculatePoints(card);
        document.getElementById("player-hand").append(cardImg);
    }
    for (let i = 0; i < 1; i++){
        let cardImg = document.createElement("img");
        let card = deck.shift();
        cardImg.src = "./images/" + card + ".png";
        dealerPoints += calculatePoints(card);
        document.getElementById("dealer-hand").append(cardImg);
    }
    document.getElementById('deal-button').disabled = true;
    document.getElementById('new-game').disabled = true;
    document.getElementById('hit-button').disabled = false;
    document.getElementById('stand-button').disabled = false;
    document.getElementById('player-points').innerText = playerPoints;
    document.getElementById('dealer-points').innerText = "??";
   
}

function calculatePoints(card) {
    let data = card.split("_of_");
    let value = data[0];
    if (isNaN(value)) {
        if(value == "ace") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}


document.getElementById('hit-button').addEventListener('click', hitCard);
function hitCard () {
    let cardImg = document.createElement("img");
    let card = deck.shift();
    cardImg.src = "./images/" + card + ".png";
    playerPoints += calculatePoints(card);
    document.getElementById("player-hand").append(cardImg);
    document.getElementById('player-points').innerText = playerPoints;
        if (playerPoints > 21) {
            setTimeout(function(){alert('You busted! Dealer wins!');},500);
            document.getElementById('dealer-points').innerText = dealerPoints;
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            document.getElementById('new-game').disabled = false;
    }
}

document.getElementById('stand-button').addEventListener('click', stand);
function stand () {
    document.getElementById('dealer-points').innerText = dealerPoints;
    if (dealerPoints < 17) {
        let cardImg = document.createElement("img");
        let card = deck.shift();
        cardImg.src = "./images/" + card + ".png";
        dealerPoints += calculatePoints(card);
        document.getElementById("dealer-hand").append(cardImg);
        document.getElementById('dealer-points').innerText = dealerPoints;
    }
    if (dealerPoints < 17) {
        let cardImg = document.createElement("img");
        let card = deck.shift();
        cardImg.src = "./images/" + card + ".png";
        dealerPoints += calculatePoints(card);
        document.getElementById("dealer-hand").append(cardImg);
        document.getElementById('dealer-points').innerText = dealerPoints;
    }
    if (dealerPoints < 17) {
        let cardImg = document.createElement("img");
        let card = deck.shift();
        cardImg.src = "./images/" + card + ".png";
        dealerPoints += calculatePoints(card);
        document.getElementById("dealer-hand").append(cardImg);
        document.getElementById('dealer-points').innerText = dealerPoints;
    }
    if (dealerPoints < 17) {
        let cardImg = document.createElement("img");
        let card = deck.shift();
        cardImg.src = "./images/" + card + ".png";
        dealerPoints += calculatePoints(card);
        document.getElementById("dealer-hand").append(cardImg);
        document.getElementById('dealer-points').innerText = dealerPoints;
    }
    if (dealerPoints > 21) {
        setTimeout(function(){alert('Dealer busted! Player wins!');},500);
    } else if (dealerPoints > playerPoints) {
        setTimeout(function(){alert('Dealer wins!');},500);
    } else if (playerPoints > dealerPoints) {
        setTimeout(function(){alert('Player wins!');},500);
    } else { (playerPoints === dealerPoints)
        setTimeout(function(){alert('Tie Game!');},500);
    }
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    document.getElementById('new-game').disabled = false;
}

document.getElementById('new-game').addEventListener('click', restartGame);
function restartGame() {
    location.reload();
}