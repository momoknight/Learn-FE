let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', function () {
  let n = parseFloat(document.querySelector('#n1').value);
  let result = document.querySelector('#result1');
  let sum = 0;
  let i = 0;
  let flag = 1;
  let item = 1;

  while (item > n) {
    sum += item * flag;
    i++;
    item = 1 / (3 * i + 1);
    flag = -flag;
  }
  sum += item * flag;

  result.innerHTML = `sum = ${sum.toFixed(6)}`;
})