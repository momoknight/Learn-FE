for(let i = 0; i < 4; i++) {
    for(let j = 0; j < i; j++) {
        document.write('&nbsp');
    }
    for(let k = 0; k < 4 - i; k++) {
        document.write('* ');
    }
    document.write('<br/>');
}