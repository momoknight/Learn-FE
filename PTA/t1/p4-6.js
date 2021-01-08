let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function () {
  let a = parseInt(document.querySelector('#a').value);
  let b = parseInt(document.querySelector('#b').value);
  let result = document.querySelector('#result2');
  let resultStr = '';
  let guess;
  let i = 1;

  while (i <= b) {
    guess = parseInt(prompt('Please enter a number: '));
    if (guess < 0) {
      resultStr = 'Game Over';
      result.innerHTML = `${resultStr}`;
      break;
    } else {
      if (a < guess) {
        resultStr += 'Too big<br>';
        result.innerHTML = `${resultStr}`;
      } else if (a > guess) {
        resultStr += 'Too small<br>';
        result.innerHTML = `${resultStr}`;
      } else {
        break;
      }
    }
    i++;
  }

  if (guess == a) {
    if (i == 1) {
      resultStr += 'Bingo!'; 
    } else if (i <= 3) {
      resultStr += 'Lucky You!';
    } else if (i > 3) {
      resultStr += 'Good Guess!';
    }
  } else {
    resultStr += 'Game Over';
  }

  result.innerHTML = `${resultStr}`;
})