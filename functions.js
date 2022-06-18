const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a,b) => a / b; 

function operate (operation, a, b) {
    if (operation === "add") {
        displayValue.innerHTML = add(a,b).toFixed(2);
    } else if (operation === "subtract") {
        displayValue.innerHTML = subtract(a,b).toFixed(2);
    } else if (operation === "multiply") {
        displayValue.innerHTML = multiply(a,b).toFixed(2);
    } else if (operation === "divide") {
        if (b === 0) {
            displayValue.innerHTML = "ERROR";
        } else {
            displayValue.innerHTML = divide(a,b).toFixed(2);
        }
    }   
}


const displayValue = document.getElementById("screen_text");
const displayOp = document.getElementById("display_op");
let arithmetic = "";
let firstNumber = 0;
let secondNumber = 0;
let decimalPoint = false;

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

const decimal = document.getElementById("decimal")
decimal.addEventListener("click", () => {
    displayValue.innerHTML += ".";
    decimalPnt(true);
})

// operational buttons

const added = document.getElementById("add")
added.addEventListener("click", () => {
    firstNumber = parseFloat(displayValue.innerHTML);
    displayValue.innerHTML = "";
    displayOp.innerHTML = "+";
    arithmetic="add";
    decimalPnt(false);
})

const times = document.getElementById("multiply")
times.addEventListener("click", () => {
    firstNumber = parseFloat(displayValue.innerHTML);
    displayValue.innerHTML = "";
    displayOp.innerHTML = "*";
    arithmetic="multiply";
    decimalPnt(false);
})

const minus = document.getElementById("subtract")
minus.addEventListener("click", () => {
    firstNumber = parseFloat(displayValue.innerHTML);
    displayValue.innerHTML = "";
    displayOp.innerHTML = "-";
    arithmetic="subtract";
    decimalPnt(false);
})

const division = document.getElementById("divide")
division.addEventListener("click", () => {
    firstNumber = parseFloat(displayValue.innerHTML);
    displayValue.innerHTML = "";
    displayOp.innerHTML = "/";
    arithmetic="divide";
    decimalPnt(false);
})

// equals button 

const equals = document.getElementById("equals")
equals.addEventListener("click", () => {
    displayOp.innerHTML = "=";
    secondNumber = parseFloat(displayValue.innerHTML)
    operate(arithmetic, firstNumber, secondNumber)
    arithmetic = "";
    decimalPnt(false)
})

// clear button 
const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
    displayValue.innerHTML = "";
    displayOp.innerHTML = "";
    firstNumber = 0;
    secondNumber = 0;
    arithmetic = "";
    decimalPnt(false)
})

// delete button
const deleteBtn = document.getElementById("delete")
deleteBtn.addEventListener("click", () => displayValue.innerHTML = displayValue.innerHTML.slice(0,-1))

// disable/enable decimal point
function decimalPnt (decStatus) {
    if (decStatus === false) {
        document.getElementById("disabled").disabled = false;
        document.getElementById("disabled").setAttribute("id","decimal")
    } else if (decStatus === true) {
        document.getElementById("decimal").disabled = true;
        document.getElementById("decimal").setAttribute("id","disabled")
    }
}