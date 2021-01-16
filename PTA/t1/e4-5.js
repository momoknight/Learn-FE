let btn5 = document.querySelector('#btn5');

btn5.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n5').value);
  let result = document.querySelector('#result5');
  let total = 0;
  let count = 0;
  let resultStr = '<br>';

  for (let fen5 = 1; fen5 <= parseInt(n / 5); fen5++) {
    for (let fen2 = 1; fen2 <= parseInt(n / 2); fen2++) {
      for (let fen1 = 1; fen1 < n; fen1++) {
        if (n == fen5 * 5 + fen2 * 2 + fen1) {
          total = fen5 + fen2 + fen1;
          resultStr += `fen5:${fen5}, fen2:${fen2}, fen1:${fen1}, total:${total}<br>`;
          count++;
        }
      }
    }
  }

  result.innerHTML = `${resultStr}count = ${count}`;
})