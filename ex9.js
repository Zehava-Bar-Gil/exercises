'use strict';

var greetings = `#########
PRIME NUMBERS
#########`

console.log(greetings)
//prime number = can only divide evenly by itself or one.
//


function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var asInt = parseInt(n)
    if (isNaN(asInt) || asInt <= 0) {
        throw new Error('N has to be an int bigger than 0')
    }
    console.log(2)
    for (var i = 3; i < n; i += 2) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}

display(1000);