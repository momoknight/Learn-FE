let sum6Btn = document.querySelector('#sum6Btn');
let averBtn = document.querySelector('#averBtn');
let sum_aver = [sum6Btn, averBtn];

function sumFn(a, b, c, d) {
    return a + b + c + d;
}

function averageFn(a, b, c, d) {
    return sumFn(a, b, c, d) / 4;
}

sum_aver.forEach((val, idx) => {
    val.addEventListener('click', function() {
        let n1 = parseInt(document.querySelector('#num1').value);
        let n2 = parseInt(document.querySelector('#num2').value);
        let n3 = parseInt(document.querySelector('#num3').value);
        let n4 = parseInt(document.querySelector('#num4').value);
        let resultSum = document.querySelector('#result10');
        let resultAver= document.querySelector('#result11');

        if (idx === 0) {
            resultSum.innerHTML = `Sum = ${sumFn(n1, n2, n3, n4)}`;
        } else {
            resultAver.innerHTML = `Average = ${averageFn(n1, n2, n3, n4)}`;
        }
    })
});