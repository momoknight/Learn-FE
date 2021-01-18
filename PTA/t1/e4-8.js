let btn8 = document.querySelector('#btn8');

btn8.addEventListener('click', function () {
  let h = parseInt(document.querySelector('#h').value);
  let n = parseInt(document.querySelector('#n8').value);
  let result = document.querySelector('#result8');
  let sum = h;
  let height = h;

  if (n === 0) {
    sum = 0.0;
    height = 0.0;
  }

  for (let i = 1; i <= n; i++) {
    height /= 2;
    sum += height * 2;
  }
  sum = sum - height * 2;

  result.innerHTML = `sum = ${sum.toFixed(1)}, height = ${height.toFixed(1)}`;
})