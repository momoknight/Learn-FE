let func2Btn = document.querySelector("#func2Btn");
 
func2Btn.addEventListener('click', function() {
    let x = parseFloat(document.querySelector('#segFunc2').value).toFixed(2);
    let y;
    let result = document.querySelector('#result3');

    if (x >= 0) {
        y = Math.sqrt(x);
    } else {
        y = Math.pow((x + 1), 2) + 2 * x + 1 / x;
    }

    result.innerHTML = `f(x) = ${y.toFixed(2)}`;
})