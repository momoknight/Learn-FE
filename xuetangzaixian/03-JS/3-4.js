var text = 'This is a text.';
var html = '<p class="sth">a <em>paragraph</em></p>';

console.log(text);
console.log(html);

var text2 = '我所做的馅饼\n是全天下\n最好吃的';

console.log(text2);

var text3 = 'if(a){\n\tconsole.log(b);\n}';

console.log(text3);

var text4 = '\u5947\u821e\u56e2'; // unicode转义符

console.log(text4);

var str = String.fromCodePoint(126978, 126979);
var arr = [...str];

console.log(str);
console.log(arr);

console.log([1+2, '1'+2, '1'-2]);

console.log(Number.parseInt('100abc', 2));
console.log(Number.parseInt('100abc'));
console.log(Number('0b100'));
console.log(Number('100abc'));

// 字符串与对象进行操作，会调用对象的toString方法
var obj = {
    /* toString(){
        return 'foo';
    } */
};

console.log(obj + ' bar');

const tpl1 = `This is a paragraph.
    Hello, World!
    Hello, Front-End!`;

console.log(tpl1);

{
    let who = 'momo';
    const tpl2 = `what's your name?
    my name is ${who}.`;

    console.log(tpl2);
}