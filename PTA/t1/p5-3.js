let btn3 = document.querySelector('#btn3');

function pyramid(n) {
  let resultStr = '<br>';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      resultStr += "&nbsp;";
    }
    for (let k = 1; k <= i; k++) {
      resultStr += `${i} `;
    }
    resultStr += '<br>';
  }

  return resultStr;
}

btn3.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n3').value);
  let result = document.querySelector('#result3');

  result.innerHTML = pyramid(n);
})