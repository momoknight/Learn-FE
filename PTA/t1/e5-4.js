let btn4 = document.querySelector('#btn4');

function prime(p) {
  if (p > 1) {
    let isPrime = 1;
    for (let i = 2; i < p; i++) {
      if (p % i == 0) {
        isPrime = 0;
      }
    }
    return isPrime;
  }
}

function PrimeSum(m, n) {
  let sum = 0;
  for (let i = m; i <= n; i++) {
    if (prime(i) === 1) {
      sum += i;
    }
  }
  return sum;
}

btn4.addEventListener('click', function () {
  let m = parseInt(document.querySelector('#m').value);
  let n = parseInt(document.querySelector('#n').value);
  let result = document.querySelector('#result4');
  let resultStr = 'Sum of ( ';

  for (let p = m; p <= n; p++) {
    if (prime(p) === 1) {
      resultStr += p + ' ';
    }
  }
  
  result.innerHTML = `${resultStr} ) = ${PrimeSum(m, n)}`;
})