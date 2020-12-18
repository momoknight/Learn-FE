let result6 = document.querySelector('#result6');
let btn6 = document.querySelector('#btn6');

btn6.addEventListener('click', function() {
    let x = parseInt(document.querySelector('#n6').value);
    let y;

    if (x === 10) {
        y = 1 / x;
    } else {
        y = x;
    }

    result6.innerHTML = `f(${x.toFixed(1)}) = ${y.toFixed(1)}`;
})