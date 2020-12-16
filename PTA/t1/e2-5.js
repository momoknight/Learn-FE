let sum9Btn = document.querySelector('#sum9Btn');

sum9Btn.addEventListener('click', function() {
    let n = parseInt(document.querySelector('#num5').value);
    let result = document.querySelector('#result15');
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += Math.sqrt(i);
    }

    result.innerHTML = `sum = ${sum.toFixed(2)}`;
})