let btn5 = document.querySelector('#btn5');

function CountDigit(number, digit) {
  let count = 0;
  let bit = 0;
  let result = number;
  while (parseInt(result) > 0) {
    bit++;
    result /= 10;
  }

  let item = parseInt(number / Math.pow(10, bit - 1)); 
  for (let i = bit - 1; i >= 0; i--) {
    if (item == digit) {
      count++;
    }
    item = parseInt(number % Math.pow(10, i) / Math.pow(10, i - 1));
  }

  return count;
}

btn5.addEventListener('click', function () {
  let number = Math.abs(parseInt(document.querySelector('#n5').value));
  let digit = parseInt(document.querySelector('#digit').value);
  let result = document.querySelector('#result5');
  
  result.innerHTML = `Number of digit ${digit} in ${number}: ${CountDigit(number, digit)}`;
})