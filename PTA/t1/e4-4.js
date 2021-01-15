let btn4 = document.querySelector('#btn4');

btn4.addEventListener('click', function () {
  let a = parseInt(document.querySelector('#a').value);
  let n = parseInt(document.querySelector('#n4').value);
  let result = document.querySelector('#result4');
  let sum = 0;
  
  for (let i = 0; i < n; i++) {
    let item = 0;
    for (let j = 0; j <= i; j++){
      item += a * Math.pow(10, j);
    }
    sum += item;
  }

  result.innerHTML = `s = ${sum}`;
})