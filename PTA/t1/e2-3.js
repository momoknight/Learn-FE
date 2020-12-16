let sum7Btn = document.querySelector('#sum7Btn');

sum7Btn.addEventListener('click', function() {
    let m = parseInt(document.querySelector('#m').value);
    let n = parseInt(document.querySelector('#n').value);
    let result = document.querySelector('#result13');
    let sum = 0;

    for (let i = m; i <= n; i++) {
        sum += i * i + 1 / i;
    }

    result.innerHTML = `sum = ${sum.toFixed(6)}`;
})