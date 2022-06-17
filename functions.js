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


let displayValue = 0;

const seven = document.getElementById("seven")
seven.addEventListener("click", () => {
    document.getElementById("screen_text").innerHTML = "7";
    console.log("click")
})