let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n3').value);
  let result = document.querySelector('#result3');
  let sum = 0;
  let item;
  let numerator = 2;
  let denominator = 1;

  for (let i = 1; i <= n; i++) {
    item = numerator / denominator;
    sum += item;
    let temp = numerator;
    numerator = numerator + denominator;
    denominator = temp;
  }

  result.innerHTML = `sum = ${sum.toFixed(2)}`;
})