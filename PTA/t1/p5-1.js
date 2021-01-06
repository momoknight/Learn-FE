let btn1 = document.querySelector('#btn1');

function sum(m, n) {
  let s = 0;
  for (let i = m; i <= n; i++) {
    s += i;
  }

  return s;
}

btn1.addEventListener('click', function () {
  let m = parseInt(document.querySelector('#m').value);
  let n = parseInt(document.querySelector('#n').value);
  let result = document.querySelector('#result1');

  result.innerHTML = `sum = ${sum(m, n)}`;
})