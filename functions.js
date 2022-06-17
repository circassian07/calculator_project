const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a,b) => a / b; 

function operate (operation, a, b) {
    if (operation === "add") {
        return add(a,b)
    } else if (operation === "subtract") {
        return subtract(a,b)
    } else if (operation === "multiply") {
        return multiply(a,b)
    } else if (operation === "divide") {
        return divide(a,b)
    }   
}


const displayValue = document.getElementById("screen_text");
let operation = "";

const zero = document.getElementById("zero")
zero.addEventListener("click", () => displayValue.innerHTML += "0")

const one = document.getElementById("one")
one.addEventListener("click", () => displayValue.innerHTML += "1")

const two = document.getElementById("two")
two.addEventListener("click", () => displayValue.innerHTML += "2")

const three = document.getElementById("three")
three.addEventListener("click", () => displayValue.innerHTML += "3")

const four = document.getElementById("four")
four.addEventListener("click", () => displayValue.innerHTML += "4")

const five = document.getElementById("five")
five.addEventListener("click", () => displayValue.innerHTML += "5")

const six = document.getElementById("six")
six.addEventListener("click", () => displayValue.innerHTML += "6")

const seven = document.getElementById("seven")
seven.addEventListener("click", () => displayValue.innerHTML += "7")

const eight = document.getElementById("eight")
eight.addEventListener("click", () => displayValue.innerHTML += "8")

const nine = document.getElementById("nine")
nine.addEventListener("click", () => displayValue.innerHTML += "9")


