let sum5Btn = document.querySelector('#sum5Btn');

function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}

sum5Btn.addEventListener('click', function() {
    let m = parseInt(document.querySelector('#m').value);
    let n = parseInt(document.querySelector('#n').value);
    let combination = fact(n) / (fact(m) * fact(n - m));
    let result = document.querySelector('#result9');

    result.innerHTML = `result = ${combination}`;
})