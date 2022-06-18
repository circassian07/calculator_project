const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a,b) => a / b; 

function operate (operation, a, b) {
    if (operation === "add") {
        displayValue.innerHTML = add(a,b);
    } else if (operation === "subtract") {
        displayValue.innerHTML = subtract(a,b);
    } else if (operation === "multiply") {
        displayValue.innerHTML = multiply(a,b);
    } else if (operation === "divide") {
        displayValue.innerHTML = divide(a,b);
    }   
}


const displayValue = document.getElementById("screen_text");
const displayOp = document.getElementById("display_op");
let arithmetic = "";
let firstNumber = 0;
let secondNumber = 0;

// numerical buttons

const zero = document.getElementById("zero")
zero.addEventListener("click", () => displayValue.innerHTML += 0)

const one = document.getElementById("one")
one.addEventListener("click", () => displayValue.innerHTML += 1)

const two = document.getElementById("two")
two.addEventListener("click", () => displayValue.innerHTML += 2)

const three = document.getElementById("three")
three.addEventListener("click", () => displayValue.innerHTML += 3)

const four = document.getElementById("four")
four.addEventListener("click", () => displayValue.innerHTML += 4)

const five = document.getElementById("five")
five.addEventListener("click", () => displayValue.innerHTML += 5)

const six = document.getElementById("six")
six.addEventListener("click", () => displayValue.innerHTML += 6)

const seven = document.getElementById("seven")
seven.addEventListener("click", () => displayValue.innerHTML += 7)

const eight = document.getElementById("eight")
eight.addEventListener("click", () => displayValue.innerHTML += 8)

const nine = document.getElementById("nine")
nine.addEventListener("click", () => displayValue.innerHTML += 9)


// operational buttons

const added = document.getElementById("add")
added.addEventListener("click", () => {
    firstNumber = parseInt(displayValue.innerHTML);
    displayValue.innerHTML = "";
    displayOp.innerHTML = "+";
    arithmetic="add";
})

const times = document.getElementById("multiply")
times.addEventListener("click", () => {
    firstNumber = parseInt(displayValue.innerHTML);
    displayValue.innerHTML = "";
    displayOp.innerHTML = "*";
    arithmetic="multiply";
})

const minus = document.getElementById("subtract")
minus.addEventListener("click", () => {
    firstNumber = parseInt(displayValue.innerHTML);
    displayValue.innerHTML = "";
    displayOp.innerHTML = "-";
    arithmetic="subtract";
})

const division = document.getElementById("divide")
division.addEventListener("click", () => {
    firstNumber = parseInt(displayValue.innerHTML);
    displayValue.innerHTML = "";
    displayOp.innerHTML = "/";
    arithmetic="divide";
})

// equals button 

const equals = document.getElementById("equals")
equals.addEventListener("click", () => {
    displayOp.innerHTML = "=";
    secondNumber = parseInt(displayValue.innerHTML)
    operate(arithmetic, firstNumber, secondNumber)
})

// clear button 
const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
    displayValue.innerHTML = "";
    displayOp.innerHTML = "";
    firstNumber = 0;
    secondNumber = 0;
    arithmetic = "";
})