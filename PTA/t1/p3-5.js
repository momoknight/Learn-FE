let btn5 = document.querySelector('#btn5');

btn5.addEventListener('click', function () {
  let year = parseInt(document.querySelector('#n5').value);
  let isLeap = 0;
  let leapY = '<br>';
  let result = document.querySelector('#result5');

  if (year <= 2000 || year > 2100) {
    leapY = 'Invalid year!';
  } else {
    let i;
    for (i = 2001; i <= year; i++) {
      if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
        leapY += i + '<br>';
        isLeap = 1;
      }
    }
    if (i > year && isLeap == 0) {
      leapY = 'None';
    }
  }

  result.innerHTML = `${leapY}`;
})