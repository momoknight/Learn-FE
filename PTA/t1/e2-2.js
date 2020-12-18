let chargeBtn = document.querySelector('#charge');

chargeBtn.addEventListener('click', function() {
    let power = parseFloat(document.querySelector('#power').value);
    let result = document.querySelector('#result12');
    let cost;
    
    if (power < 0) {
        cost = 'Invalid Value!';
    } else if (power <= 50) {
        cost = 0.53 * power; 
        cost = cost.toFixed(2);
    } else {
        cost = 0.53 * power + 0.05 * (power - 50);
        cost = cost.toFixed(2);
    }

    result.innerHTML = `cost = ${cost}`;
})