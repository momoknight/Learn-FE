let btn2 = document.querySelector('#btn2');

function factorial(n) {
  let fact = 1;
  let i = 2;
  while (i <= n) {
    fact *= i;
    i++;
  }
  return fact;
}

btn2.addEventListener('click', function () {
  let n = parseFloat(document.querySelector('#n2').value);
  let result = document.querySelector('#result2');
  let sum = 0;
  let k = 0;
  let item = 1;

  while (item >= 0.00001) {
    sum += item;
    k++;
    item = Math.pow(n, k) / factorial(k);
  }

  sum += Math.pow(n, (k + 1)) / factorial(k + 1);

  result.innerHTML = `sum = ${sum.toFixed(4)}`;
})