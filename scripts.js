let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "ace", "jack", "queen", "king"];
let suit = ["clubs", "diamonds", "hearts", "spades"];
let dealerPoints = 0;
let playerPoints = 0;

let newGameBtn = document.getElementById('new-game');
let hitBtn = document.getElementById('hit-button');
let standBtn = document.getElementById('stand-button');
let dealBtn = document.getElementById('deal-button');



window.addEventListener('DOMContentLoaded', () => {
    newGameBtn.disabled = true;
    hitBtn.disabled = true;
    standBtn.disabled = true;
    buildDeck();
   shuffleDeck();
});

let buildDeck = () => {
    deck = []
    for (let i = 0; i < rank.length; i++) {
        for (let j= 0; j < suit.length; j++) {
            deck.push(rank[i] + "_of_" + suit[j]);
        };
    };
};

let shuffleDeck = () => {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    };
};


//DEAL BUTTON
dealBtn.addEventListener('click', () => {
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
        cardImg.src = "./images/backCard.png";
        // cardImg.src = "./images/" + hiddenCard + ".png";
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
    };

    if (dealerPoints === 21) {
        setTimeout(function(){alert('Dealer blackjack! Dealer wins!');},500);
        dealBtn.disabled = true;
        newGameBtn.disabled = false;
        hitBtn.disabled = true;
        standBtn.disabled = true;
        document.getElementById('player-points').innerText = playerPoints;
        document.getElementById('dealer-points').innerText = dealerPoints;
    } else if (playerPoints === 21) {
        setTimeout(function(){alert('WINNER WINNER CHICKEN DINNER! Player wins!');},500);
        dealBtn.disabled = true;
        newGameBtn.disabled = false;
        hitBtn.disabled = true;
        standBtn.disabled = true;
        document.getElementById('player-points').innerText = playerPoints;
        document.getElementById('dealer-points').innerText = dealerPoints;
    } else {
        dealBtn.disabled = true;
        newGameBtn.disabled = true;
        hitBtn.disabled = false;
        standBtn.disabled = false;
        document.getElementById('player-points').innerText = playerPoints;
        document.getElementById('dealer-points').innerText = "??";
    };
});


let  calculatePoints = (card) => {
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

//HIT BUTTON
hitBtn.addEventListener('click', () => {
    let cardImg = document.createElement("img");
    let card = deck.shift();
    cardImg.src = "./images/" + card + ".png";
    playerPoints += calculatePoints(card);
    document.getElementById("player-hand").append(cardImg);
    document.getElementById('player-points').innerText = playerPoints;
        if (playerPoints > 21) {
            setTimeout(function(){alert('You busted! Dealer wins!');},500);
            document.getElementById('dealer-points').innerText = dealerPoints;
            hitBtn.disabled = true;
            standBtn.disabled = true;
            newGameBtn.disabled = false;
    }
});

//STAND BUTTON
standBtn.addEventListener('click', () => {
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
    hitBtn.disabled = true;
    standBtn.disabled = true;
    newGameBtn.disabled = false;
});

newGameBtn.addEventListener('click', () => {
    location.reload();
});