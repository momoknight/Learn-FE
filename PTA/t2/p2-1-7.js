let result7= document.querySelector('#result7');

let a = 152 % 10;
let b = parseInt(152 % 100 / 10);
let c = parseInt(152 / 100);

result7.innerHTML = `152 = ${a} + ${b}*10 + ${c}*100`;