let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n3').value);
  let sum = 0;
  let count = 0;
  let result = document.querySelector('#result3');


  for (let i = 0; i < n; i++) {
    let score = parseInt(prompt("Please enter your score: "));
    sum += score;
    if (score >= 60) {
      count++;
    }
  }

  let average = sum / n;

  result.innerHTML = `average = ${average.toFixed(1)}, count = ${count}`;
})