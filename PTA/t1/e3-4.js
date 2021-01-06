let btn4 = document.querySelector('#btn4');

btn4.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n5').value);
  let a = b = c = d = e = 0;

  for (let i = 0; i < n; i++) {
    let score = prompt('Please enter your score: ');
    if (score >= 90) {
      a++;
    } else if (score >= 80 && score < 90) {
      b++;
    } else if (score >= 70 && score < 80) {
      c++;
    } else if (score >= 60 && score < 70) {
      d++;
    } else {
      e++;
    }
  }

  let result = document.querySelector('#result4');
  result.innerHTML = `A:${a} B:${b} C:${c} D:${d} E:${e}`;
})