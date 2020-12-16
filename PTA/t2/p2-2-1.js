let result1 = document.querySelector('#result1');
let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', function() {
    let x = parseFloat(document.querySelector('#n1').value).toFixed(1);
    let y = 0;
    if (x != 0) {
        y = 1 / x;
    }

    result1.innerHTML = `f(x) = ${y.toFixed(1)}`;
})