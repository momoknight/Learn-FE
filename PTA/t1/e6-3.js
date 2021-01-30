let btn3 = document.querySelector('#btn3');

function factorsum(number) {
  let sum = 1;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum;
}

function PrintPN(m, n) {
  let item = '<br>';
  let flag = 0;
  for (let i = m; i <= n; i++) {
    if (i === factorsum(i)) {
      let factor = '';
      flag++;
      let j = 1;
      for (; j <= i / 2; j++) {
        if (i % j === 0) {
          if (j < i / 2) {
            factor += `${j} + `;
          } else {
            factor += `${j}`;
          }
        }
      }
      item += `${i} = ${factor}<br>`;
    }
  }

  if (flag === 0) {
    item = 'No perfect number';
  }

  return item;
}

btn3.addEventListener('click', function () {
  let m = parseInt(document.querySelector('#m3').value);
  let n = parseInt(document.querySelector('#n3').value);
  let result = document.querySelector('#result3');
  
  result.innerHTML = `${PrintPN(m, n)}`;
})