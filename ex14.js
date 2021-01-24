'use strict';

var readlineSync = require('readline-sync');

var userInput = readlineSync.question("enter integer:")
var asInt = parseInt(userInput)
if (isNaN(asInt) || asInt <= 0) {
    throw new Error('N has to be an int bigger than 0')
}

var arr = []
for (var i = 0; i < asInt; i++) {
    var randomNumber = Math.floor(Math.random() * 50 + 1)
    arr.push(randomNumber)
}
console.log(arr)

var min = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("min is", min);

var max = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
        max = arr[i];
    }
}
console.log("max is", max);