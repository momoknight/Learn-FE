let btn5 = document.querySelector('#btn5');

function prime(p) {
  let isPrime = 1;
  if (p == 1) {
    isPrime = 0;
  } else {
    for (let i = 2; i < p; i++) {
      if (p % i == 0) {
        isPrime = 0;
        break;
      }
    }
  }
  
  return isPrime;
}

function Goldbach(n) {
  let result;
  let flag = 0;
  for (let i = 2; i < n; i++) {
    for (let j = n - 2; j > 2; j--) {
      if (prime(i) && prime(j)) {
        if (i + j === n) {
          result = `${n} = ${i} + ${j}`;
          flag = 1;
          break;
        }
      }
    }
    if (flag == 1) {
      break;
    }
  }

  return result;
}

btn5.addEventListener('click', function () {
  let m = parseInt(document.querySelector('#m5').value);
  let n = parseInt(document.querySelector('#n5').value);
  let result = document.querySelector('#result5');
  let cnt = 0;
  let resultStr = '<br>';

  if (prime(m)) {
    resultStr += `${m} is a prime number<br>`;
  }
  if (m < 6) {
    m = 6;
  }
  if (m % 2) {
    m++;
  }

  for (let i = m; i <= n;) {
    resultStr += Goldbach(i);
    cnt++;
    if (cnt % 5) {
      resultStr += ', ';
    } else {
      resultStr += '<br>';
    }
    i += 2;
  }

  result.innerHTML = `${resultStr}`;
})