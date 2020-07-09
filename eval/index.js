let result = [];

const keypad = document.querySelector('.keypad');
const output = document.getElementById('output');
const equal = document.getElementById('equal');

const regex = /[\d\-+*\/]/;

keypad.addEventListener('click', e => {
  switch (e.target.name) {
    case "equal":
      let computedValue = eval(result.join(''));
      output.innerText = computedValue;
      result = computedValue.toString(10).split('');
      break;
    case "backspace":
      result.pop();
      output.innerText = result.join('');
      break;
    case "clear":
      output.innerText = '0';
      result = [];
      break;
    case "decimal":
      if (!result.includes(".")) {
        result.push(e.target.innerText);
        output.innerText = result.join('');
      }
      break;
    default:
      if (regex.test(e.target.innerText)) {
        result.push(e.target.innerText);
        output.innerText = result.join('');
      }
      break;
  }
});
