let result5 = document.querySelector('#result5');
let btn5 = document.querySelector('#btn5');

function sum(a, b, c, d) {
    return a + b + c + d;
}

function average(a, b, c, d) {
    return sum(a, b, c, d) / 4;
}

btn5.addEventListener('click', function () {
    let r1, r2;
    let a = parseInt(document.querySelector('#n5a').value);
    let b = parseInt(document.querySelector('#n5b').value);
    let c = parseInt(document.querySelector('#n5c').value);
    let d = parseInt(document.querySelector('#n5d').value);

    r1 = sum(a, b, c, d);
    r2 = average(a, b, c, d);

    result5.innerHTML = `Sum = ${r1}; Average = ${r2.toFixed(1)}`;
})