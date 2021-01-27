let btn6 = document.querySelector('#btn6');

function narcissistic(number) {
  let flag = 0;
  let bit = 0;
  let temp = number;
  while (parseInt(temp) > 0) {
    bit++;
    temp /= 10;
  }
  let item = Math.pow(parseInt(number / Math.pow(10, bit - 1)), bit);
  for (let i = bit - 1; i > 0; i--) {
    item += Math.pow(parseInt(number % Math.pow(10, i) / Math.pow(10, i - 1)), bit);
  }

  if (item == number) {
    flag = 1;
  }

  return flag;
}

function PrintN(m, n) {
  let result = `<br>`;
  for (let i = m; i <= n; i++) {
    if (narcissistic(i)) {
      result += `${i} <br>`;
    }
  }

  return result;
}

btn6.addEventListener('click', function () {
  let m = Math.abs(parseInt(document.querySelector('#m6').value));
  let n = parseInt(document.querySelector('#n6').value);
  let result = document.querySelector('#result6');
  
  result.innerHTML = `narcissistic number are: ${PrintN(m, n)}`;
})