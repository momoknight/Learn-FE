let btn5 = document.querySelector('#btn5');

btn5.addEventListener('click', function () {
  let x1 = parseInt(document.querySelector('#x1').value);
  let y1 = parseInt(document.querySelector('#y1').value);
  let x2 = parseInt(document.querySelector('#x2').value);
  let y2 = parseInt(document.querySelector('#y2').value);
  let x3 = parseInt(document.querySelector('#x3').value);
  let y3 = parseInt(document.querySelector('#y3').value);
  let result = document.querySelector('#result5');
  let resultStr;

  let one = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
  let two = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
  let three = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));

  let l, a;

  if (one + two > three && one + three > two && two + three > one) {
    l = one + two + three;
    let p = l / 2;
    a = Math.sqrt(p * (p - one) * (p - two) * (p - three));
    resultStr = `L = ${l.toFixed(2)}, A = ${a.toFixed(2)}`;
  } else {
    resultStr = 'Impossible';
  }

  result.innerHTML = resultStr;
})