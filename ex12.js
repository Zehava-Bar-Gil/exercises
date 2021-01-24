'use strict';

var readlineSync = require('readline-sync');

var userInput = readlineSync.question ("Please write a sentence with a vowel (a, e, i, o, u, y):");

    let convert = (str) => {
        return str.split('').reduce((a, c) => a + (/[aeiouy]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
      }
      
      console.log("Result is", convert(userInput))
      
