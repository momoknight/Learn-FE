let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function() {
    let n = parseInt(document.querySelector('#n2').value);
    let y = 0;
    let result = document.querySelector('#result2');

    if (n < 0) {
        y = -1;
    } else if (n === 0) {
        y = 0;
    } else {
        y = 1
    }

    result.innerHTML = `sign(${n}) = ${y}`;
})