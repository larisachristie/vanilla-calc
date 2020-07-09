let operand1;
let operand2;
let operator;

const keypadButtons = document.querySelectorAll('.keypad button');
const output = document.getElementById('output');
const equal = document.getElementById('equal');
const regexDigits = /\d/;
const regexOperators = /[\-+*\/]/;

const display = value => {
  output.textContent = value;
}

const clear = () => {
  console.log('clear');
  operand1 = operand2 = operator = undefined;
  display("0");
}

const setoperand = value => {
  if (operand1) {
    if (!operator && regexDigits.test(value)) {
      operand1 = operand1 + value;
    }
    operand2 = +operand2 +value;
  } else if (regexDigits.test(value)) {
    operand1 = value;
  }
  display(operand1);
};

const setOperator = value => {
  if (regexOperators.test(value)) {
    console.log('operator is ', value);
    operator = value;
  }
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
  if (!b == 0) {
    return Number(a) / Number(b);
  }
};

keypadButtons.forEach(item => item.addEventListener('click', e => {
  setoperand(e.target.innerText);
}));

const calculate = () => {
  switch (operator) {
    case 'add':
      display(add(operand1, operand2));
      break;
    case 'subtract':
      display(subtract(operand1, operand2));
      break;
    case 'multiply':
      display(multiply(operand1, operand2));
      break;
    case 'divide':
      display(divide(operand1, operand2));
      break;
    default:
      break;
  }
};

if (equal) {
  equal.addEventListener('click', () => {
    if (//.test()) {
      calculate();
    }
  });
}