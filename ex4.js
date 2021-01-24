'use strict';
var readlineSync = require('readline-sync');

function parseNumOfPeople(input) {
    var parsedNum = parseInt(input)
    if (isNaN(parsedNum)) {
        throw new Error("Num of people can't be parsed to integer")
    }
    else if (parsedNum < 1) {
        throw new Error("Num has to be 1 or more")
    }
    return parsedNum
}

console.log("I am Zehava and I will recommend a restaurant in Tel Aviv for y'all")
var numOfPeople = readlineSync.question('How many people are you going with:');
numOfPeople = parseNumOfPeople(numOfPeople)
var isKosher = readlineSync.question('Should it be Kosher?');
isKosher = isKosher === 'y'

var isMehadrin
if (isKosher) {
    isMehadrin = readlineSync.question('Should it be Kashrut Lemehadrin?');
    isMehadrin = isMehadrin === 'y'
}

var items = ['Sushi', 'Pizza']
var foodType = readlineSync.keyInSelect(items, 'What kind of food do you want?')
foodType = items[foodType]

var recommendedRestaurant
if (foodType === 'Sushi') {
    if (isMehadrin) {
        recommendedRestaurant = 'Oshi Oshi'
    }
    else if (isKosher) {
        recommendedRestaurant = 'Kanki'
    }
    else {
        recommendedRestaurant = 'MinnaTmei'
    }
}
else if (foodType === 'Pizza') {
    if (isMehadrin) {
        recommendedRestaurant = 'Pizza and Tortilla'
    }
    else if (isKosher) {
        recommendedRestaurant = 'Donattello'
    }
    else {
        recommendedRestaurant = 'Milago Milbar'
    }
}


console.log('You should try ' + recommendedRestaurant)

