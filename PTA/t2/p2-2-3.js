let result3 = document.querySelector('#result3');
let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function() {
    let money = parseInt(document.querySelector('#a').value);
    let year = parseInt(document.querySelector('#b').value);
    let rate = parseFloat(document.querySelector('#c').value);
    let interest = money * Math.pow((1 + rate), year) - money;

    result3.innerHTML = `Celsius = ${interest.toFixed(2)}`;
})