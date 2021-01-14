let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', function () {
  let a = parseInt(document.querySelector('#a').value);
  let b = parseInt(document.querySelector('#b').value);
  let c = parseInt(document.querySelector('#c').value);
  let result = document.querySelector('#result1');

  let min;
  if (a > b) {
    min = b;
    b = a;
    a = min;
  }

  if (a > c) {
    min = c;
    c = a;
    a = min;
  }

  if (b > c) {
    min = c;
    c = b;
    b = min;
  }
  
  result.innerHTML = `${a}->${b}->${c}`;
})