'use strict';

// var readlineSync = require('readline-sync');

// var userInput1 = readlineSync.question(`Please write a word in arr1:`)
// var userInput2 = readlineSync.question(`Please write a word in arr2:`)

const sampleArr1 = ['Hot', 'Water']
const sampleArr2 = ['Small', 'Glass']

function concatStringArrays(arr1, arr2) {
  const Result = [...arr1, ...arr2]
  return Result
}

// const arr1 = [userInput1];
// const arr2 = [userInput2];
console.log(concatStringArrays(sampleArr1, sampleArr2));

