const display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstNumber = "";
let secondNumber = "";
let result = null;

function updateDisplay(value) {
  display.value = value;
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.getAttribute("data-value");

    if (value === null) {
      if (this.id === "clear") {
        currentInput = "";
        firstNumber = "";
        secondNumber = "";
        result = null;
        operator = "";
        updateDisplay(0);
      } else if (this.id === "equals") {
        secondNumber = currentInput;
        calculateResult();
      }
    } else {
      if (["+", "-", "*", "/"].includes(value)) {
        if (currentInput !== "") {
          firstNumber = currentInput;
          operator = value;
          currentInput = "";
        }
      } else {
        currentInput += value;
        updateDisplay(currentInput);
      }
    }
  });
});

function calculateResult() {
  const firstValue = parseFloat(firstNumber);
  const secondValue = parseFloat(secondNumber);

  switch (operator) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    case "/":
      result = firstValue / secondValue;
      break;
    default:
      result = "Error";
      break;
  }

  updateDisplay(result);
  firstNumber = result.toString();
  currentInput = "";
  operator = "";
}
