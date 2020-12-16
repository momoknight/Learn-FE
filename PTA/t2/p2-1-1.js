let result1 = document.querySelector('#result1');

let fahr = 100;
let celsius = parseInt(5 * (fahr - 32) / 9);

result1.innerHTML = `fahr = ${fahr}, celsuis = ${celsius}`;