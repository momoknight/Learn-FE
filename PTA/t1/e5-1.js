let btn1 = document.querySelector('#btn1');

function sign(n) {
  if (n > 0) {
    y = 1;
  } else if (n == 0) {
    y = 0;
  } else {
    y = -1;
  }

  return y;
}

btn1.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n1').value);
  let result = document.querySelector('#result1');

  result.innerHTML = `sign(${n}) = ${sign(n)}`;
})