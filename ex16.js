'use strict';

// var readlineSync = require('readline-sync');

// var userInput = readlineSync.question("enter some integers:")
// var asInt = parseInt(userInput)
// console.log(asInt)
// if (isNaN(asInt) || asInt <= 0) {
//     throw new Error('N has to be an int bigger than 0')
// }

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}
const sampleArr = [2, 4, 6, 8, 10]
// const arr = [userInput];
console.log(reverse(sampleArr));
// console.log(arr);
// console.log(reverse(arr));
