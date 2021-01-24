'use strict';
var readlineSync = require('readline-sync');
var figlet = require('figlet');

const prettyWelcome = figlet.textSync('HANG MAN!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
});
console.log(prettyWelcome)

var userInput = readlineSync.question("Please enter your name:");
console.log("Hello", userInput, "!");

var wordOptions = ["pancake", "pineapple", "almond", "rainbow"];
var choice = Math.floor(Math.random() * 4);
var correctAnswer = wordOptions[choice];

var correctAnswerLetters = correctAnswer.split('');
var attemptsLeft = 10;
const guessesArr = []

function isAWin() {
    return correctAnswerLetters.every(letter => guessesArr.includes(letter))
}
function getWordToShow() {
    const arrToSHow = correctAnswerLetters.map(letter => {
        if (guessesArr.includes(letter)) {
            return letter
        }
        else {
            return '*'
        }
    })
    return arrToSHow.join('')
}

let gameOver = false
do {
    console.log(`You have ${attemptsLeft} chances to guess letters!`);
    console.log(`the word is:
    ${getWordToShow()}`)

    const userInput = readlineSync.question("What is your guess:\n");
    if (userInput.length === 1 && /[a-zA-Z]/.test(userInput)) {
        const pickedLetter = userInput.toLowerCase()

        if (guessesArr.includes(pickedLetter)) {
            console.log('You have guessed this letter already')
        }
        else {
            guessesArr.push(pickedLetter)
            if (correctAnswer.indexOf(pickedLetter) === -1) {
                attemptsLeft--
                if (attemptsLeft < 1) {
                    console.log(`YOU LOSE!!!`);
                    gameOver = true
                }
            }
            else if (isAWin()) {
                console.log(`YOU WIN!!!`);
                gameOver = true
            }
        }
    }
    else {
        console.log('The input is invalid.')
    }

} while (!gameOver)





