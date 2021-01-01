let btn8 = document.querySelector('#btn8');

btn8.addEventListener('click', function () {
  let result = document.querySelector('#result8');
  let price;
  let resultStr = '<br>';

  for (let i = 0; i < 5; i++) {
    let n = prompt("Please enter a number: ");
    let fruit = parseInt(n);
    console.log(fruit)

    if (n != '0' && n != null ) {
      switch (fruit) {
        case 1:
          price = 3.00;
          break;
        case 2:
          price = 2.50;
          break;
        case 3:
          price = 4.10;
          break;
        case 4:
          price = 10.20;
          break;
        default:
          price = 0.00;
          break;
      }
    } else {
      break;
    }
        
    resultStr += `price = ${price.toFixed(2)}<br>`;
  }

  result.innerHTML = `${resultStr}`;
})