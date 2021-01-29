let btn2 = document.querySelector('#btn2');

function fn(a, n) {
  let result = a;
  for (let i = 1; i < n; i++) {
    result += a * Math.pow(10, i);
  }

  return result;
}

function SumA(a, n) {
  let sum = a;
  let item = a;
  for (let i = 1; i < n; i++) {
    item += a * Math.pow(10, i);
    sum += item;
  }

  return sum;
}

btn2.addEventListener('click', function () {
  let a = parseInt(document.querySelector('#a').value);
  let n = parseInt(document.querySelector('#n2').value);
  let result = document.querySelector('#result2');
  
  result.innerHTML = `fn(${a}, ${n}) = ${fn(a, n)}<br>s = ${SumA(a, n)}`;
})