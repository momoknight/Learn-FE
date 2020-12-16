let result2 = document.querySelector('#result2');
let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function() {
    let fahr = parseInt(document.querySelector('#n2').value);
    let celsius = 5 * (fahr - 32) / 9;

    result2.innerHTML = `Celsius = ${parseInt(celsius)}`;
})