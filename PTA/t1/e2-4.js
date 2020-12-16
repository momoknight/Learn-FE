let sum8Btn = document.querySelector('#sum8Btn');

sum8Btn.addEventListener('click', function() {
    let n = parseInt(document.querySelector('#num').value);
    let result = document.querySelector('#result14');
    let flag = 1;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += (i + 1) / (2 * i + 1) * flag;
        flag = -flag;
    }

    result.innerHTML = `sum = ${sum.toFixed(3)}`;
})