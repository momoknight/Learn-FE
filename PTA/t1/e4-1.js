let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', function () {
  let result = document.querySelector('#result1');
  let n = parseInt(prompt('Please enter a number: '));
  let sum = 0;

  while (n > 0) {
    if (n % 2 !== 0) {
      sum += n;
    }
    n = parseInt(prompt('Please enter a number: '));
  }

  result.innerHTML = `sum = ${sum}`;
})