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
document.querySelector("#addNumbers").addEventListener('click', addNumbers )
document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers )




/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */