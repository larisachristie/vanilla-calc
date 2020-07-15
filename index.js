let operand1;
let operand2;
let operator;

const keypadButtons = document.querySelectorAll('.keypad button');
const output = document.getElementById('output');
const equalButton = document.querySelector('[name = "equal"]');
const clearButton = document.querySelector('[name = "clear"]');
const backspaceButton = document.querySelector('[name = "backspace"]');

const display = value => {
  output.textContent = value;
};

const setOperand = value => {
  if (operator) {
    if (!operand2) {
      if (value === ".") {
        operand2 = 0 + value;
      } else {
        operand2 = value;
      }
    } else if (value !== "." || value === "." && !operand2.includes(value)) {
      operand2 += value;
    }
    display(operand2);
  } else {
    if (!operand1) {
      if (value === ".") {
        operand1 = 0 + value;
      } else {
        operand1 = value;
      }
    } else if (value !== "." || value === "." && !operand1.includes(value)) {
      operand1 += value;
    }
    display(operand1);
  }
};

const setOperator = value => {
  operator = value;
  display(operator);
};

const add = (a, b) => {
  return Number(a) + Number(b);
};

const subtract = (a, b) => {
  return Number(a) - Number(b);
};

const multiply = (a, b) => {
  return Number(a) * Number(b);
};

const divide = (a, b) => {
  if (!b === 0) {
    return Number(a) / Number(b);
  }
};

const clear = () => {
  operand1 = operand2 = operator = null;
};

clearButton.addEventListener('click', () => {
  clear();
  display(0);
});

const eraseChar = source => {
  return source.slice(0, -1);
};

backspaceButton.addEventListener('click', () => {
  if (operand2) {
    operand2 = eraseChar(operand2);
    display(operand2);
  } else if (operator) {
    operator = null;
    display("<enter operator>");
  } else if (operand1) {
    operand1 = eraseChar(operand1);
    display(operand1);
  }
});

keypadButtons.forEach(item => item.addEventListener('click', e => {
  const regexOperands = /\d|\./;
  const regexOperators = /[\-+*\/]/;
  if (regexOperands.test(e.target.name)) {
    setOperand(e.target.name);
  } else if (operand1 && regexOperators.test(e.target.innerText)) {
    setOperator(e.target.innerText);
  }
}));

equalButton.addEventListener('click', () => {
  switch (operator) {
    case '+':
      display(add(operand1, operand2));
      break;
    case '-':
      display(subtract(operand1, operand2));
      break;
    case '*':
      display(multiply(operand1, operand2));
      break;
    case '/':
      display(divide(operand1, operand2));
      break;
    default:
      break;
  }
  clear();
});