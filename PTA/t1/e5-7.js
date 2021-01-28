let btn7 = document.querySelector('#btn7');

function factorial(n) {
  let fact = 1;
  if (n > 1) {
    while (n > 1) {
      fact *= n;
      n--;
    }
  }
  return fact;
}

function funcos(e, x) {
  let result = 0;
  let flag = 1;
  let item;
  let i = 0;
  do {
    item = flag * Math.pow(x, i) / factorial(i);
    result += item;
    flag = -flag;
    i = i + 2;
  } while (Math.abs(item) >= e);

  return result.toFixed(6);
}

btn7.addEventListener('click', function () {
  let e = parseFloat(document.querySelector('#m7').value);
  let x = parseFloat(document.querySelector('#n7').value);
  let result = document.querySelector('#result7');
  
  result.innerHTML = `cos(${x.toFixed(2)}) = ${funcos(e, x)}`;
})