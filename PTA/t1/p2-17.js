let sum4Btn = document.querySelector('#sum4Btn');

sum4Btn.addEventListener('click', function() {
    let n4 = parseInt(document.querySelector('#n4').value);
    let result = document.querySelector('#result8');
    let resultStr = '';

    for (let i = 0; i <= n4; i++) {
        resultStr += `pow(3, ${i}) = ${Math.pow(3, i)}<br>`;
    }

    result.innerHTML = resultStr;
})