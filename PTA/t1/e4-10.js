let btn10 = document.querySelector('#btn10');

btn10.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n10').value);
  let result = document.querySelector('#result10');
  let sum = 0;
  let r = 1;

  for (let i = n - 1; i > 0; i--) {
    r = (r + 1) * 2;
  }
  sum = r;

  result.innerHTML = sum;
})