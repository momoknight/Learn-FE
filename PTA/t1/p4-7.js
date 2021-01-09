let btn3 = document.querySelector('#btn3');

function factorial(n) {
  let fact = 1;
  let i = 2;
  while (i <= n) {
    fact *= i;
    i++;
  }
  return fact;
}

btn3.addEventListener('click', function () {
  let n = parseFloat(document.querySelector('#n3').value);
  let result = document.querySelector('#result3');
  let sum = 0;
  
  for (let i = 0; i <= n; i++) {
    sum += 1 / factorial(i);
  }

  result.innerHTML = `e = ${sum.toFixed(8)}`;
})