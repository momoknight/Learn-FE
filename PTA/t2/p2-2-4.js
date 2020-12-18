let result4 = document.querySelector('#result4');
let btn4 = document.querySelector('#btn4');

btn4.addEventListener('click', function() {
    let x = parseFloat(document.querySelector('#n4').value).toFixed(2);
    let y;
    if (x < 0) {
        y = Math.pow((x + 1), 2) + 2 * x + 1 / x;
    } else {
        y = Math.sqrt(x);
    }

    result4.innerHTML = `f(${x}) = ${y.toFixed(2)}`;
})