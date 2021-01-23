let btn3 = document.querySelector('#btn3');

function dist(x1, y1, x2, y2) {
  let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
  return distance.toFixed(2);
}

btn3.addEventListener('click', function () {
  let x1 = parseInt(document.querySelector('#x1').value);
  let y1 = parseInt(document.querySelector('#y1').value);
  let x2 = parseInt(document.querySelector('#x2').value);
  let y2 = parseInt(document.querySelector('#y2').value);
  let result = document.querySelector('#result3');
  
  result.innerHTML = `dist = ${dist(x1, y1, x2, y2)}`;
})