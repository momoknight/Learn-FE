let btn11 = document.querySelector('#btn11');

function isPrime(n) {
  let flag = true;
  if (n == 1) {
    flag = 0;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}

btn11.addEventListener('click', function () {
  let m = parseInt(document.querySelector('#m').value);
  let n = parseInt(document.querySelector('#n').value);
  let result = document.querySelector('#result11');
  let count = 0;
  let sum = 0;

  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      count++;
      sum += i;
    }
  }

  result.innerHTML = `素数个数：${count}，素数和：${sum}`;
})