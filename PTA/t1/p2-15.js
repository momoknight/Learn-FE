let sum3Btn = document.querySelector('#sum3Btn');

sum3Btn.addEventListener('click', function() {
    let n3 = parseInt(document.querySelector('#n3').value);
    let result = document.querySelector('#result7');
    let flag = 1;
    let sum = 0;

    for (let i = 1; i <= n3; i++) {
        sum += 1 / (3 * i -2) * flag;
        flag = -flag;
    }

    result.innerHTML = `sum = ${sum.toFixed(3)}`;
})