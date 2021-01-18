let btn9 = document.querySelector('#btn9');

btn9.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n9').value);
  let result = document.querySelector('#result9');
  let resultStr = '<br>';

  for (let i = 0; i < (n + 1) / 2; i++) {
    for (let j = (n + 1) / 2 - 1; j > i; j--) {
      resultStr += '&nbsp;';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      resultStr += '* ';
    }
    resultStr += '<br>';
  }

  for (let i = (n + 1) / 2; i < n; i++) {
    for (let j = (n + 1) / 2; j <= i; j++) {
      resultStr += '&nbsp;';
    }
    for (let k = 2 * (n - i - 1) + 1; k > 0; k--) {
      resultStr += '* ';
    }
    resultStr += '<br>';
  }

  result.innerHTML = resultStr;
})