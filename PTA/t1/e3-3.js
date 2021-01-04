let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function () {
  let range = parseFloat(document.querySelector('#n3').value);
  let wait = parseInt(document.querySelector('#n4').value);
  let result = document.querySelector('#result3');

  let charge;

  if (range <= 3) {
    charge = 10;
  } else if (range > 3 && range <= 10) {
    charge = 10 + 2 * (range - 3);
  } else {
    charge = 10 + 2 * 7 + 3 * (range - 10);
  }
  console.log(charge)

  charge = charge + 2 * parseInt(wait / 5);
  
  result.innerHTML = `${Math.round(charge)}`;
})