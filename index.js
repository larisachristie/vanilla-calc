let input1;
let input2;
let operator;
const reset = () => {
  input1 = input2 = operator = undefined;
}
const clearDisplay = () => {
  document.getElementById('output').innerHTML = "0";
}
const displayInput = value => {
  document.getElementById('output').innerHTML = value;
}
const setInput = value => {
  displayInput(value);
  if (input1) {
    if (!operator) {
      console.log(typeof input1);
      input1 = Number(input1 + value);
    }
    input2 = Number(input2 + value);
  } else {
    input1 = Number(value);
  }
};



const add = (a, b) => {
  operator = 'addition';
  return a + b;
};

const substract = (a, b) => {
  operator = 'substract';
  return a - b;
};

const multiply = (a, b) => {
  operator = 'multiply';
  return a * b;
};

const divide = (a, b) => {
  if (!b == 0) {
    operator = 'divide';
    return a / b;
  } else {
    console.log('don\'t divide by zero, dummy!' )
  }
};

const equal = () => {
  switch (operator) {
    case 'addition':
      document.getElementById('output').innerHTML = add(input1, input2);
      break;
    case 'substract':
      document.getElementById('output').innerHTML = substract(input1, input2);
      break;
    case 'multiply':
      document.getElementById('output').innerHTML = multiply(input1, input2);
      break;
    case 'divide':
      document.getElementById('output').innerHTML = divide(input1, input2);
      break;
    default:
      break;
  }
  reset();
};