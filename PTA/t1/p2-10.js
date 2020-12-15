let funcBtn = document.querySelector('#funcBtn');

funcBtn.addEventListener('click', function() {
    let x = parseFloat(document.querySelector('#segFunc').value).toFixed(1);
    let y = 0;
    let result = document.querySelector('#result2');

    if (x !== 0) {
        y = 1 / x;
    }

    result.innerHTML = `f(x) = ${y.toFixed(1)}`;
})