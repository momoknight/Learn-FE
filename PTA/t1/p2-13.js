let sum1Btn = document.querySelector('#sum1Btn');

sum1Btn.addEventListener('click', function() {
    let n1 = parseInt(document.querySelector('#n1').value);
    let result = document.querySelector('#result5');
    let sum = 0;

    for (let i = 1; i <= n1; i++) {
        sum += 1 / i;
    }

    result.innerHTML = `sum = ${sum.toFixed(6)}`;
})