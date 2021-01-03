let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function () {
  let speed = parseInt(document.querySelector('#n1').value);
  let limit = parseInt(document.querySelector('#n2').value);
  let result = document.querySelector('#result2');

  let percent = (speed - limit) / limit * 100;
  let panish;

  if (percent >= 50){
    panish = `Exceed ${Math.round(percent)}%. License Revoked`;
  } else if (percent >= 10) {
    panish = `Exceed ${Math.round(percent)}%. Ticket 200`;
  } else {
    panish = 'OK';
  }
  
  result.innerHTML = `${panish}`;
})