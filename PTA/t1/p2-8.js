let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    let fahr = parseInt(document.querySelector('#fahr').value);
    let celsiusPara = document.querySelector('#celsius');
    let celsius = parseInt(5 * (fahr - 32) / 9);
    celsiusPara.innerHTML = `Celsius = ${celsius}`;
    console.log(celsius);
})