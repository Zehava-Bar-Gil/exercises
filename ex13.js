'use strict';

var readlineSync = require('readline-sync');

var userInput = readlineSync.question("Please write a sentence with a longst word:");

function wordIsCorrect(word) {
    for (var i = 0; i < word.length; i++) {
        var char = word[i]
        if(! /[a-zA-Z]/.test(char)){
            return false
        }
    }
    return true
}

function findLongestWord(str) {
    var words = str.split(" ");
    var longest = "";

    for (var word of words) {
        if (wordIsCorrect(word) && word.length > longest.length) longest = word;
    }
    return longest;
}
console.log(findLongestWord(userInput));
