let btn6 = document.querySelector('#btn6');

function reverse(n) {
  let result = '';
  let bit = 1;
  if (n < 0) {
    n = Math.abs(n);
    result = '-';
  }
  
  let temp = n;
  while (parseInt(temp / 10) > 0) {
    bit++;
    temp /= 10;
  }

  for (let i = 1; i < bit; i++) {
    result += parseInt(n % Math.pow(10, i) / Math.pow(10, i - 1));
  }
  result += parseInt(n / Math.pow(10, bit - 1));

  return result;
}

btn6.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n6').value);
  let result = document.querySelector('#result6');

  result.innerHTML = `${reverse(n)}`;
})