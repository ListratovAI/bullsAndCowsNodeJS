/* const readlineSync = require('readline-sync');
const userName = readlineSync.question('What is you name? ');
console.log('Hello', userName); */

const readlineSync = require('readline-sync');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getValueNumbers() {
    let valueNumbersExample = readlineSync.question('How many numbers for play? (From 3 to 6) ');
    if (valueNumbersExample <= 6 && valueNumbersExample >= 3) {
        return valueNumbersExample;
    } else {
        console.log("This is wrong value!");
        return getValueNumbers();
    }
}

const valueNumbers = getValueNumbers();

function generateNumber(value) {
    for (let i = 0; i < value; i++) {
        massNumbers[i] = getRandom(0, 9);
    }
}

const massNumbers = [];
let trueNumbersPlacing = 0;
let trueNumbers = 0;
let trueNumbersMass = [];
let trueNumbersPlacingMass = [];
let counter = 20;
let lengthMass;
let counterWin = 0;
generateNumber(valueNumbers);
let massNumbersSlice = massNumbers.slice();

function guessing() {
    
    let userNumber = readlineSync.question('Please, enter the number ');
    for (let i = 0; i < valueNumbers; i++){
        checkByTruePlace(userNumber[i],massNumbers[i],counterWin);
        lengthMass = massNumbersSlice.length;
        for (let j = 0; j <= lengthMass; j++) {
            checkByTrueNumber (userNumber[i],massNumbersSlice[j],j);
        }
    }
    console.log(`Matching numbers in their places - ${trueNumbersPlacing} (${trueNumbersMass}), numbers out of place - ${trueNumbers} (${trueNumbersPlacingMass})`);
    trueNumbersPlacing = 0;
    trueNumbers = 0;
    if (counterWin == valueNumbers) {
        console.log("You win!");
        return;
    }
    counterWin = 0;
    trueNumbersMass = [];
    trueNumbersPlacingMass = [];
    massNumbersSlice = massNumbers.slice();
    lengthMass = massNumbersSlice.length;
    --counter;
    if (counter > 0){
    guessing();
    }
    else {
        console.log("You Fail");
    }
}

function checkByTruePlace(user, computer) {
    if (user == computer) {
        ++trueNumbersPlacing;
        trueNumbersMass.push(user);
        ++counterWin;
    }
    else {
        return;
    }
}
function checkByTrueNumber(user, computer,k) {
    if (user == computer) {
        ++trueNumbers;
        massNumbersSlice.splice(k,1);
        trueNumbersPlacingMass.push(user);
        return;
    }
    else {
        return;
    }
}
guessing();