let sum10Btn = document.querySelector('#sum10Btn');

function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

sum10Btn.addEventListener('click', function() {
    let n = parseInt(document.querySelector('#num6').value);
    let result = document.querySelector('#result16');
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += factorial(i);
    }

    result.innerHTML = `sum = ${sum}`;
})