let result9 = document.querySelector('#result9');
let btn9 = document.querySelector('#btn9');

btn9.addEventListener('click', function() {
    let a = parseInt(document.querySelector('#n9a').value);
    let b = parseInt(document.querySelector('#n9b').value);
    let t = b - a;

    let h = parseInt(t / 100);
    if (h < 10) {
        h = '0' + h;
    }
    let m = t % 100;
    if (m < 10) {
        m = '0' + m;
    }
    console.log(h, m)
    result9.innerHTML = `${h}:${m}`;
})