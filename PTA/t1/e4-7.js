let btn7 = document.querySelector('#btn7');

function gcd(a, b) {
  let r = a % b;
  while (r != 0) {
    a = b;
    b = r;
    r = a % b;
  }
  return b;
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

btn7.addEventListener('click', function () {
  let m = parseInt(document.querySelector('#m').value);
  let n = parseInt(document.querySelector('#n').value);
  let result = document.querySelector('#result7');

  result.innerHTML = `gcd = ${gcd(m, n)}, lcm = ${lcm(m, n)}`;
})