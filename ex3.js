'use strict';
var readlineSync = require('readline-sync');

var firstNumber = readlineSync.question('Enter a number:');
var asNumber = parseInt(firstNumber)
if (asNumber === 0) {
    console.log('ZERO')
}
if (asNumber === 1) {
    console.log('ONE')
}
else if (asNumber === 2) {
    console.log('TWO')
}
if (asNumber === 3) {
    console.log('THREE')
}
if (asNumber === 4) {
    console.log('FOUR')
}
else if (asNumber === 5) {
    console.log('FIVE')
}
if (asNumber === 6) {
    console.log('SIX')
}
if (asNumber === 7) {
    console.log('SEVEN')
}
else if (asNumber === 8) {
    console.log('EIGHT')
}
if (asNumber === 9) {
    console.log('NINE')
}
