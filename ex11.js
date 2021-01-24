'use strict';
var readlineSync = require('readline-sync');

var userInput = readlineSync.question("Please enter a string \n");

var isPalindrome = true
for (var i = 0; i < userInput.length / 2; i++) {
    var currentChar = userInput[i]
    var matchingChar = userInput[userInput.length - 1 - i]

    if (currentChar !== matchingChar) {
        isPalindrome = false
    }
}

if (isPalindrome) {
    console.log(`String is a palindrome`)
}
else {
    console.log(`String is not a palindrome`)
}