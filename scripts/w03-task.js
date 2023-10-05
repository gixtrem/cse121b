/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2) {
    const sum = number1 + number2;
    return sum;
}

function addNumbers() {
    const firstNumber = parseFloat(document.querySelector("#add1").value);
    const secondNumber = parseFloat(document.querySelector("#add2").value);
    const sum = add(firstNumber, secondNumber);
    document.querySelector("#sum").value = sum;
}

function Subtract(number1, number2) {
    const difference = number1 - number2;
    return difference;
}

function subtractNumbers() {
    const firstNumber = parseFloat(document.querySelector("#subtract1").value);
    const secondNumber = parseFloat(document.querySelector("#subtract2").value);
    const difference = Subtract(firstNumber, secondNumber);
    document.querySelector("#difference").value = difference;
}

let multiply = (number1, number2) => {
    const product = number1 * number2;
    return product;
};

let multiplyNumbers = () => {
    const firstNumber = parseFloat(document.querySelector("#factor1").value);
    const secondNumber = parseFloat(document.querySelector("#factor2").value);
    const product = multiply(firstNumber, secondNumber);
    document.querySelector("#product").value = product;
};

function divide(Dividend, Divisor) {
    const quotient = Dividend / Divisor;
    return quotient;
}

function divideNumbers() {
    const Dividend = parseFloat(document.querySelector("#dividend").value);
    const Divisor = parseFloat(document.querySelector("#divisor").value);
    const quotient = divide(Dividend, Divisor);
    document.querySelector("#quotient").value = quotient;
}

document.querySelector("#addNumbers").addEventListener('click', addNumbers);
document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);
document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
const yearInputElement = document.getElementById('year'); // Removed the #
yearInputElement.value = currentYear;

//const currentDate = new Date();
//const currentYear = currentDate.getFullYear();
//document.getElementById('year').textContent = currentYear

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').textContent = numbersArray.join(', ');

const oddNumbers = numbersArray.filter(number => number % 2 !==0);
document.getElementById('odds').textContent = oddNumbers.join(', ')

const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');

const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;


//const sumOfArray = numberArray.reduce((sum, number) => sum + number);
//const sumElement = document.getElementById('sumOfArray'); // Changed to sumOfArray
