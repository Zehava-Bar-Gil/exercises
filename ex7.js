'use strict';

var readlineSync = require('readline-sync');
var userInput = readlineSync.question('please enter a positive number:');
var userNumber = parseInt(userInput)
if (isNaN(userNumber) || userNumber < 1) {
    throw new Error('I did not get a positive number')
}

// iterative approach
function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i; // fact = fact * i;
    }
    return fact;
}

console.log(factorial(userNumber));





