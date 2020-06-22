let input1;
let input2;
let operator;

const display = value => {
  document.getElementById('output').textContent = value;
}
const reset = () => {
  input1 = input2 = operator = undefined;
  display("0");
}

const setInput = value => {
  if (input1) {
    if (!operator) {
      input1 = input1 + value;
    }
    input2 = input2 + value;
  } else {
    input1 = value;
  }
  display(value);
};

const setOperator = value => {
  operator = value;
};

const add = (a, b) => {
  return Number(a) + Number(b);
};

const substract = (a, b) => {
  return Number(a) - Number(b);
};

const multiply = (a, b) => {
  return Number(a) * Number(b);
};

const divide = (a, b) => {
  if (!b == 0) {
    return Number(a) / Number(b);
  } else {
    display('don\'t divide by zero, dummy!');
  }
};

const equal = () => {
  switch (operator) {
    case 'add':
      display(add(input1, input2));
      break;
    case 'substract':
      display(substract(input1, input2));
      break;
    case 'multiply':
      display(multiply(input1, input2));
      break;
    case 'divide':
      display(divide(input1, input2));
      break;
    default:
      break;
  }
};