let btn7 = document.querySelector('#btn7');

btn7.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n7').value);
  let result = document.querySelector('#result7');
  let scoreStr;

  if (n >= 90) {
    scoreStr = 'A';
  } else if (n >= 80 && n < 90) {
    scoreStr = 'B';
  } else if (n >= 70 && n < 80) {
    scoreStr = 'C';
  } else if (n >= 60 && n < 70) {
    scoreStr = 'D';
  } else {
    scoreStr = 'E';
  }

  result.innerHTML = `${scoreStr}`;
})