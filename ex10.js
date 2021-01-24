'use strict';
var readlineSync = require('readline-sync');

var userInput = readlineSync.question("Please write a sentence \n");

var newString = ''
for (var i = 0; i < userInput.length; i++) {
    if (userInput[i] === ' ') {
        newString += '*'
    }
    else {
        newString += userInput[i]
    }
}

console.log(newString)
