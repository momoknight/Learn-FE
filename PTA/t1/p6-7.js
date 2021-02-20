let btn7 = document.querySelector('#btn7');

btn7.addEventListener('click', function () {
  let operation, a, b, input, z;
  let result = document.querySelector('#result7');
  let resultValue = 0;

  a = parseInt(prompt('Please enter a number or an operator: '));
  operation = a;

  input = prompt('Please enter a number or an operator: ');
  while (input != null) {
    switch (input) {
      case '+':
        b = parseInt(prompt('Please enter a number or an operator: '));
        operation += b;
        break;
      case '-':
        b = parseInt(prompt('Please enter a number or an operator: '));
        operation -= b;
        break;
      case '*':
        b = parseInt(prompt('Please enter a number or an operator: '));
        operation *= b;
        break;
      case '/':
        b = parseInt(prompt('Please enter a number or an operator: '));
        if (b == 0) {
          resultValue = 'ERROR';
          z = 0;
          break;
        } else {
          operation /= b;
          break;
        }
      case '=':
        resultValue = operation;
        z = 0;
        break;
    }

    if (z == 0) {
      break;
    }
    input = prompt('Please enter a number or an operator: ');
  }

  result.innerHTML = `${resultValue}`;
})