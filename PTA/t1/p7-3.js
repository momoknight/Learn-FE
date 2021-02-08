let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function () {
  let n = document.querySelector('#n3').value;
  let result = document.querySelector('#result3');
  let inputList = [];

  for (let i = 0; i < n; i++) {
    let input = parseInt(prompt('Please enter an integer number: '));
    inputList[i] = input;
  }

  result.innerHTML = `${inputList.reverse().join(' ')}`;
})