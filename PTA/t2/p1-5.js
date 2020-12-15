let diamond1Btn = document.querySelector('#diamond1Btn');
let diamond1 = document.querySelector('#diamond1');
let diamond1Str = '';

diamond1Btn.addEventListener('click', function () {
    for (let i = 0; i < 2; i++) {
        for (let j = 1; j > i; j--) {
            diamond1Str += '&nbsp;';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            if (k === 0 || k === 2 * i) {
                diamond1Str += 'A';
            } else {
                diamond1Str += '&nbsp;';
            }
        }
        diamond1Str += '<br>';
    }
    
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j <= i; j++) {
            diamond1Str += '&nbsp;';
        }      
        for (let k = 0; k < 1 - 2 * i; k++) {
            diamond1Str += 'A';
        }
        diamond1Str += '<br>';
    }
    diamond1.innerHTML = diamond1Str;
})