let btn2 = document.querySelector('#btn2');

function max(a, b) {
  let m = a;
  if (b > m) {
    m = b;
  }

  return m;
}

btn2.addEventListener('click', function () {
  let a = parseInt(document.querySelector('#a').value);
  let b = parseInt(document.querySelector('#b').value);
  let result = document.querySelector('#result2');

  result.innerHTML = `max = ${max(a, b)}`;
})