let temperBtn = document.querySelector('#temperBtn');

temperBtn.addEventListener('click', function() {
    let lower  = parseInt(document.querySelector('#lower').value);
    let upper  = parseInt(document.querySelector('#upper').value);

    let result = document.querySelector('#result4');
    let temperStr = 'fahr celsius<br>';
    let fahr, celsius;

    if (lower > upper || lower > 100 || upper >100) {
        result.innerHTML = 'Invalid.';
    } else {
        for (fahr = lower; fahr <= upper; fahr=fahr+2) {
            celsius = (5 * (fahr - 32) / 9).toFixed(1);
            temperStr += `${fahr}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${celsius}<br>`;
        }
        result.innerHTML = temperStr;
    }
})