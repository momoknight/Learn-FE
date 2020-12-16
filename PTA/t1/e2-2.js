let chargeBtn = document.querySelector('#charge');

chargeBtn.addEventListener('click', function() {
    let power = parseFloat(document.querySelector('#power').value);
    let result = document.querySelector('#result12');
    let cost = 0;
    
    if (cost < 0) {
        cost = 'Invalid Value!';
    } else if (power <= 50) {
        cost = 0.53 * power; 
    } else {
        cost = 0.53 * power + 0.05 * (power - 50);
    }

    result.innerHTML = `cost = ${cost.toFixed(2)}`;
})