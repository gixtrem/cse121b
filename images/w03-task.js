/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
    function add(number1 , number2){
        const sum = number1 + number2
        return sum
    }
/* Function Definition - Add Numbers */

function addNumbers() {
    const firstNumber = parseFloat(document.querySelector("#add1").value)
    const secondNumber = parseFloat(document.querySelector("#add2").value)
     const sum = add(firstNumber,secondNumber)
     document.querySelector("#sum").value = sum

     
}
    
    

/* Function Expression - Subtract Numbers */
function Subtract(number1, number2){
    const difference = number1 - number2
    return difference
}

function subtractNumbers(){
    const firstNumber = parseFloat(document.querySelector("#subtract1").value)
    const secondNumber = parseFloat(document.querySelector("#subtract2").value)
     const difference = Subtract(firstNumber, secondNumber)
     document.querySelector("#difference").value = difference
}
/* Arrow Function - Multiply Numbers */

let multiply = (number1, number2) => {
    const product = number1 * number2
    return product
}

let multiplyNumbers = () => {
    const firstNumber = parseFloat(document.querySelector("#factor1").value)
    const secondNumber = parseFloat(document.querySelector("#factor2").value)
     const product = multiply(firstNumber, secondNumber)
     document.querySelector("#product").value = product
}

function divide(Dividend, Divisor){
    const quotient = Dividend / Divisor;
    return quotient
}
function divideNumbers(){
    const Dividend = parseFloat(document.querySelector("#dividend").value)
    const Divisor = parseFloat(document.querySelector("#divisor").value)
     const quotient = divide(Dividend, Divisor)
     document.querySelector("#quotient").value = quotient
}
//let divide = (dividend, divisor) => {
//    const quotient = dividend / divisor
//    return quotient
//}

//let quotientNumber = () => {
//    const dividend = parseFloat(document.querySelector("#dividend").value)
//    const divisor = parseFloat(document.querySelector("#divisor").value)
//     const quotient = divide(dividend, divisor)
//     document.querySelector("#quotient").value = quotient
//}






//hmmmmmmmmm so tired from coding somebody save me please

document.querySelector("#addNumbers").addEventListener('click', addNumbers )
document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers )
document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers )
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers )
/* Open Function Use - Divide Numbers */


/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
const yearInputElement = document.getElementById('#year');
yearInputElement.value = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */



let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayElement = document.getElementById('array');
//arrayElement.textContent = numberArray.join(',');

const oddNumbers = numberArray.filter(number => number % 2 !==0);
const oddElement = document.getElementById('odds');
//oddElement.textContent = oddNumbers.join(',');


const evenNumber = numberArray.filter(number => number %2 ===0);
const evenElement = document.getElementById('evens');
//evenElement.textContent = evenNumber.join(',');




const MultipliedArray = numberArray.map(number => number * 2);
const MultipliedElement = document.getElementById('multiplied');



const sumOfArray = numberArray.reduce((sum, number) => sum + number);
const sumElement = document.getElementById('somOfArray');

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */