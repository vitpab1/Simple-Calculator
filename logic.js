let displayData = "";

const buttons = document.querySelectorAll(".btn-number, .btn-operator");
const display = document.querySelector(".display");
const equals = document.querySelector(".btn-equals");
const clear = document.querySelector(".btn-clear");
const erase = document.querySelector(".btn-delete");

let firstValue = "";
let secondValue = "";

let changeValue = true;
let operators = ["×", "+", "/", "-"];
let operationToDo = "";

//add an eventListener to each of the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // logic that run when the button is "clicked"

    const buttonValue = button.getAttribute("data-num");

    if (changeValue == true && operators.indexOf(buttonValue) == -1) {
      firstValue += button.getAttribute("data-num");
    }
    console.log(firstValue);

    if (operators.indexOf(buttonValue) != -1) {
      changeValue = false;
      operationToDo = button.getAttribute("data-num");

      document.querySelectorAll(".btn-operator").forEach((elem) => {
        elem.disabled = true;
      });
    }

    if (changeValue == false && operators.indexOf(buttonValue) == -1) {
      secondValue += button.getAttribute("data-num");
    }

    displayData += buttonValue;
    display.textContent = displayData;
  });
});

equals.addEventListener("click", () => {
  displayData = calculate();

  display.textContent = displayData;

  firstValue = display.textContent;
  secondValue = "";

  if (display.textContent == "Infinity") {
    alert("You have been reported to the math police!");
  }
  document.querySelectorAll(".btn-operator").forEach((elem) => {
    elem.disabled = false;

    console.log(firstValue);
  });
});

function calculate() {
  switch (operationToDo) {
    case "×":
      return parseFloat(firstValue) * parseFloat(secondValue);
      break;
    case "+":
      return parseFloat(firstValue) + parseFloat(secondValue);
      break;
    case "-":
      return parseFloat(firstValue) - parseFloat(secondValue);
      break;
    case "/":
      return parseFloat(firstValue) / parseFloat(secondValue);
      break;
  }
}

clear.addEventListener("click", () => {
  location.reload();
});

erase.addEventListener("click", () => {
  location.reload();
});
