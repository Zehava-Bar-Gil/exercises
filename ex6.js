'use strict';

var readlineSync = require('readline-sync');
var userInput = readlineSync.question('please choose a number larger than 10:');
var userNumber = parseInt(userInput)

while (isNaN(userNumber) || userNumber <= 10) {
    var userInput = readlineSync.question('please choose a number LARGER than 10:');
    var userNumber = parseInt(userInput)
}
console.log('thank you')