let input1 = document.querySelector('#numA');
let input2 = document.querySelector('#numB');
let result = document.querySelector('#result');

let addBtn = document.querySelector('#add');
let minusBtn = document.querySelector('#minus');
let multiplyBtn = document.querySelector('#multiply');
let divideBtn = document.querySelector('#divide');

let btnList = [addBtn, minusBtn, multiplyBtn, divideBtn];

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let funcList = [add, minus, multiply, divide];

btnList.forEach((val, idx) => {
    val.addEventListener('click', function() {
        let n1 = parseInt(input1.value);
        let n2 = parseInt(input2.value);
        if (n1 <= 0 || !Number.isInteger(n1)) {
            alert('A请输入正整数');
        }
        if (n2 <= 0 || !Number.isInteger(n2)) {
            alert('B请输入正整数');
        }
        if (idx === 3 && n2 ===0) {
            alert('0不能为除数');
        } else {
            result.innerHTML = `n1 + n2 = ${funcList[idx](n1, n2)}`;
        }
    })
})