let result2 = document.querySelector('#result2');

let fahr2 = 150;
let celsius2 = parseInt(5 * (fahr2 - 32) / 9);

result2.innerHTML = `fahr = ${fahr2}, celsuis = ${celsius2}`;