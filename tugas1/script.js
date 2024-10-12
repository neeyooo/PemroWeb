let display = document.getElementById("display");
let currentInput = "0";
let operator = "";
let firstOperand = null;

document.querySelectorAll(".button").forEach(button => {
  button.addEventListener("click", function () {
    const value = this.innerText;

    if (value === "AC") {
      currentInput = "0";
      firstOperand = null;
      operator = "";
      display.innerText = currentInput;
    } else if (value === "=") {
      if (firstOperand !== null && operator !== "") {
        currentInput = operate(firstOperand, currentInput, operator);
        operator = "";
        firstOperand = null;
      }
      display.innerText = currentInput;
    } else if (["÷", "×", "-", "+", "%"].includes(value)) {
      if (firstOperand === null) {
        firstOperand = currentInput;
        currentInput = "0";
        operator = value;
      } else if (operator) {
        firstOperand = operate(firstOperand, currentInput, operator);
        operator = value;
        currentInput = "0";
      }
    } else if (value === ".") {
      if (!currentInput.includes(".")) {
        currentInput += value;
        display.innerText = currentInput;
      }
    } else {
      if (currentInput === "0" && value !== "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.innerText = currentInput;
    }
  });
});

function operate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (op) {
    case "÷":
      return a / b;
    case "×":
      return a * b;
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "%":
      return (a / 100) * b;
  }
}
