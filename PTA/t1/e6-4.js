let btn4 = document.querySelector('#btn4');

function fib(n) {
  let f1 = f2 = 1;
  let i = 3;
  while (n > 2 && i <= n) {
    let temp = f1;
    f1 = f2;
    f2 = temp + f1;
    i++;
  } 

  return f2;
}

function PrintFN(m, n) {
  let result = '';
  let i = 1;
  let flag = 0;
  while (fib(i) <= n) {
    if (fib(i) >= m) {
      result += `${fib(i)} `;
      flag++;
    }
    i++;
  }
  if (flag == 0) {
    result = 'No Fibonacci number';
  }

  return result;
}

btn4.addEventListener('click', function () {
  let m = parseInt(document.querySelector('#m4').value);
  let n = parseInt(document.querySelector('#n4').value);
  let t = parseInt(document.querySelector('#t4').value);
  let result = document.querySelector('#result4');
  
  result.innerHTML = `<br>fib(${t}) = ${fib(t)}<br>${PrintFN(m, n)}`;
})