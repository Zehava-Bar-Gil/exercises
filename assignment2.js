'use strict';
var readlineSync = require('readline-sync');

var greetings = `\\\\\\------
Welcome To WAR!
------\\\\\\`
console.log(greetings)

var userInput = readlineSync.question("Please enter your name:");

var userMoney = 50
console.log("Hello", userInput, "You curently have " + userMoney + " dollars")

var gameOver = false
do {
    var userBetInput = readlineSync.question("Please your bet for the next round. 1 to " + userMoney + ':');
    var userBet = parseInt(userBetInput)
    if (!isNaN(userBet)) {
        if (userBet < 0 || userBet > userMoney) {
            console.log("You are a liar!! bye bye!")
            gameOver = true
        }
        else {
            var computerCard = Math.floor(Math.random() * 12 + 1)
            var ourCard = Math.floor(Math.random() * 12 + 1)
            console.log(`your card is ${ourCard} and my card is ${computerCard}`)
            if (ourCard > computerCard) {
                userMoney += userBet
                console.log(`you won ${userBet}!! now you have ${userMoney}`)
            }
            else {
                userMoney -= userBet
                console.log(`you lost ${userBet}. now you have ${userMoney}`)
            }
            if (userMoney <= 0) {
                console.log('You are broke... Bye Bye')
                gameOver = true
            }
            else {
                var anotherRoundInput = readlineSync.question(`What would you like to do:
                1. Play another round
                2. Leave with my money =:`);
                if (anotherRoundInput !== '1') {
                    console.log(`you have ${userMoney} left. see you later`)
                }
            }
        }
    }
}
while (!gameOver)





