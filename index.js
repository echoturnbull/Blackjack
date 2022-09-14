let player = {
    name: "Nathan",
    chips: 130
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let hitMe = document.getElementById("total")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


function getRandomCard() {
    let randomCard = Math.floor ( Math.random() * 13) +1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}


function startGame() { 
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    playerEl.textContent = player.name + ": $" + player.chips
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    hitMe.textContent = "Total: " + sum
    if (sum <= 20) {
        message = "Draw a card?"
    } else if (sum === 21) {
        message = "Blackjack baby!"
        hasBlackJack = true
    } else {
        message = "Bad luck Loser!"
        isAlive = false
    }
   messageEl.textContent = message
}




function drawCard() {
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}
