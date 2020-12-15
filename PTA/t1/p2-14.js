let sum2Btn = document.querySelector('#sum2Btn');

sum2Btn.addEventListener('click', function() {
    let n2 = parseInt(document.querySelector('#n2').value);
    let result = document.querySelector('#result6');
    let sum = 0;

    for (let i = 1; i <= n2; i++) {
        sum += 1 / (2 * i - 1);
    }

    result.innerHTML = `sum = ${sum.toFixed(6)}`;
})