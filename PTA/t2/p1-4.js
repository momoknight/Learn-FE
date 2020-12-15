let triangle1Btn = document.querySelector('#triangle1Btn');
let triangle1 = document.querySelector('#triangle1');
let triangle1Str = '';

triangle1Btn.addEventListener('click', function () {
    for (let i = 0; i < 4; i++) {
        for (let j = 4 - i; j > 0; j--) {
            triangle1Str += '*';
        }
        triangle1Str += '<br>';
    }
    triangle1.innerHTML = triangle1Str;
})