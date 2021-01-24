'use strict';

var greetings = `#########
7BOOM!
#########`
console.log(greetings)

function has7inside(number) {
    var firstDigit = number % 10
    var secondDigit = parseInt(number / 10)
    var thirdDigit = parseInt(number / 100)
    if (firstDigit === 7 || secondDigit === 7 || thirdDigit === 7) {
        return true
    }
    return false
}

for (var i = 1; i <= 100; i += 1) {
    if ((i % 7 === 0) || has7inside(i)) {
        console.log('BOOM')
    }
    else {
        console.log(i)
    }
}
