'use strict';
var readlineSync = require('readline-sync');

function numberToPostion(number) {
    if (number === 0) {
        return 'first'
    }
    else if (number === 1) {
        return 'second'
    }
    else if (number === 2) {
        return 'third'
    }
    else if (number === 3) {
        return 'fourth'
    }
    else if (number === 4) {
        return 'fifth'
    }
    else if (number === 5) {
    return 'sixth'
    }
    else if (number === 6) {
    return 'seventh'
    }
    else if (number === 7) {
    return 'eighth'
    }
    else if (number === 8) {
    return 'ninth'
}
else if (number === 9) {
    return 'tenth'
}
}

var myQuestions = [
    {
        question: "What is 144/12?",
        answers: {
            a: '14',
            b: '12',
            c: '16',
            d: '8'
        },
        correctAnswer: 'b'
    },
    {
        question: "What year was established the stat of Israel?",
        answers: {
            a: '1948',
            b: '1952',
            c: '1967',
            d: '1942'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which beer is produced in the Netherlands?",
        answers: {
            a: 'Maccabi',
            b: 'Tuborg',
            c: 'Corona',
            d: 'Heineken'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is the largest island in the world?",
        answers: {
            a: 'Honshu',
            b: 'Greenland',
            c: 'Madagascar',
            d: 'New Guinea'
        },
        correctAnswer: 'b'
    },
    {
        question: "How many actors have played the character of Batman in cinema?",
        answers: {
            a: '5',
            b: '3',
            c: '4',
            d: '2'
        },
        correctAnswer: 'c'
    },
    {
            question: "What is the height of the famous statue of Christ at the top of Corcovado in Rio de Janeiro?",
            answers: {
                a: '25 meters',
                b: '38 meters',
                c: '15 meters',
                d: '50 meters'
            },
            correctAnswer: 'b'
    },
    {
        question: "Which of the following won the most Olympic medals?",
        answers: {
            a: 'Michael Phelps',
            b: 'Nadia Comaneci',
            c: 'Sergey Bubka',
            d: 'Mark Spitz'
        },
        correctAnswer: 'a'
},
{
    question: "Which of the following refused to be President of Israel?",
    answers: {
        a: 'Ezer Weizmann',
        b: 'Albert Einstein',
        c: 'Zigmond Freud',
        d: 'Benjamin Zeev Herzl'
    },
    correctAnswer: 'b'
},
{
    question: "What is Umami?",
    answers: {
        a: 'Love in Japanese',
        b: 'Delicious',
        c: 'Asian dish',
        d: 'The fifth taste'
    },
    correctAnswer: 'd'
},
{
    question: "What is the second highest mountain in the world??",
    answers: {
        a: 'Kilimanjaro',
        b: 'Aconcagua',
        c: 'K2',
        d: 'Everest'
    },
    correctAnswer: 'c'
},

];


var greetings = `#########
"Hello! Welcome to the quiz!
#########`
console.log(greetings)

var correctAnswers = 0
myQuestions.forEach((questionObject, questionIndex) => {
    var questionText = questionObject.question
    var keys = Object.keys(questionObject.answers)
    var options = keys.map(key => questionObject.answers[key])
    console.log(`------------
    ${numberToPostion(questionIndex)} question`)
    var userAnswerIndex = readlineSync.keyInSelect(options, questionText)
    var userAnswer = keys[userAnswerIndex]
    if (userAnswer === questionObject.correctAnswer) {
        correctAnswers = correctAnswers + 1
    }
})

console.log('Your score is ' + (correctAnswers / 10) * 100)