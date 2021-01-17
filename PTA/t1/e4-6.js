let btn6 = document.querySelector('#btn6');

btn6.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n6').value);
  let result = document.querySelector('#result6');
  let resultStr = '<br>';
  
  for (let i = Math.pow(10, (n - 1)); i <= Math.pow(10, n) - 1; i++) {
    let m = Math.pow(parseInt(i / Math.pow(10, (n - 1))), n);
    for (let j = n - 1; j > 0; j--) {
      m += Math.pow(parseInt(i % Math.pow(10, j) / Math.pow(10, j - 1)), n);
    }

    if (i == m) {
      resultStr += m + '<br>';
    }
  }

  result.innerHTML = resultStr;
})