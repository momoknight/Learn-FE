let result7 = document.querySelector('#result7');
let btn7 = document.querySelector('#btn7');

btn7.addEventListener('click', function() {
    let a = parseInt(document.querySelector('#n7a').value);
    let b = parseInt(document.querySelector('#n7b').value);

    result7.innerHTML = `<br>${a} + ${b} = ${a + b}<br>
    ${a} - ${b} = ${a - b}<br>
    ${a} * ${b} = ${a * b}<br>
    ${a} / ${b} = ${parseInt(a / b)}`;
})