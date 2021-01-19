let btn11 = document.querySelector('#btn11');

btn11.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n11').value);
  let result = document.querySelector('#result11');
  let x1 = x2 = 0;
  let sum = 1;
  let count = 1;

  if (n > 1) {
    while (sum < n) {
      x1 = x2;
      x2 = sum;
      sum += x1;
      count++;
    }
  }

  result.innerHTML = count;
})