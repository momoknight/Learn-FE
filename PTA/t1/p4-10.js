let btn10 = document.querySelector('#btn10');

btn10.addEventListener('click', function () {
  let n = parseInt(document.querySelector('#n10').value);
  let result = document.querySelector('#result10');

  let min = parseInt(prompt('Please enter a number: '));
  for (let i = 1; i < n; i++) {
    let num = parseInt(prompt('Please enter a number: '));
    if (num < min) {
      min = num;
    }
  }

  result.innerHTML = `min = ${min}`;
})