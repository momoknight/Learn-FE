let btn4 = document.querySelector('#btn4');

btn4.addEventListener('click', function () {
  let letter = 0, blank = 0, digit = 0, other = 0;
  let result = document.querySelector('#result4');


  for (let i = 0; i < 10; i++) {
    let input = prompt("Please enter a char: ");

    if (input >= '0' && input <= '9') {
      digit++;
    } else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
      letter++;
    } else if (input == ' ' || input == '\n') {
      blank++;
    } else {
      other++;
    }
  }

  result.innerHTML = `letter = ${letter}, blank = ${blank}, digit = ${digit}, other = ${other}`;
})