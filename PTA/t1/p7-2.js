let btn2 = document.querySelector('#btn2');

function max(list, n) {
  let result;
  let j = 0;
  let m = list[0];
  for (let i = 1; i < n; i++) {
    if (list[i] > m) {
      m = list[i];
      j = i;
    }
  }

  result = `${m} ${j}`;
  return result;
}

btn2.addEventListener('click', function () {
  let n = document.querySelector('#n2').value;
  let result = document.querySelector('#result2');
  let inputList = [];

  for (let i = 0; i < n; i++) {
    let input = parseInt(prompt('Please enter an integer number: '));
    inputList[i] = input;
  }

  result.innerHTML = `${max(inputList, n)}`;
})