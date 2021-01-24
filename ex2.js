'use strict';
var readlineSync = require('readline-sync');

var firstNumber = readlineSync.question('Enter a number:');
var secondNumber = readlineSync.question('Enter another number:');

const sum = parseInt(firstNumber) + parseInt(secondNumber)
if (sum === 10) {
    console.log('makes 10')
}
else {
    console.log('Nope')
}