let btn8 = document.querySelector('#btn8');

btn8.addEventListener('click', function () {
  let n = document.querySelector('#n8').value;
  let result = document.querySelector('#result8');
  let count = 0;

  for (let i = 0; i < n.length; i++) {
    if (n[i] == ' ') {
      count++;
    }
  }

  result.innerHTML = `${count + 1}`;
})