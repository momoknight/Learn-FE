let btn2 = document.querySelector('#btn2');

function even(n) {
  if (n % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}

function OddSum(List, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (even(List[i]) === 0) {
      sum += List[i];
    }
  }
  return sum;
}

btn2.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n2').value);
  let result = document.querySelector('#result2');
  let resultStr = 'Sum of ( ';

  let inputList = [];
  for (let i = 0; i < n; i++) {
    let input = parseInt(prompt('Please enter a number: '));
    inputList[i] = input;
    if (even(inputList[i]) === 0) {
      resultStr += inputList[i] + ' ';
    }
  }

  resultStr += `) = ${OddSum(inputList, n)}`;
  result.innerHTML = resultStr;
})