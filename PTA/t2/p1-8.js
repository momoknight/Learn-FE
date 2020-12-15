let triangle2Btn = document.querySelector('#triangle2Btn');
let triangle2 = document.querySelector('#triangle2');
let triangle2Str = '';

triangle2Btn.addEventListener('click', function () {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < i; j++) {
            triangle2Str += '&nbsp;';
        }
        for (let k = 0; k < 4 - i; k++) {
            triangle2Str += '*&nbsp;';
        }
        triangle2Str += '<br>';
    }
    triangle2.innerHTML = triangle2Str;
})