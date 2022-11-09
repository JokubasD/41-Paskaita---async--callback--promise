'use strict';
console.log('callback.js');

const btn1El = document.getElementById('btn1');
const timeEl = document.getElementById('time');

btn1El.addEventListener('click', () => {
    console.log('clicked')
    setTimeout(() => {
        console.log('clicked delayed')
    }, 3000);
})

// setInterval(() => {
//     console.log('every two seconds')
// }, 2000);

function tick() {
    const now = new Date()
    timeEl.textContent = now.toLocaleTimeString('lt-LT', {timeStyle: 'medium'})
}
setInterval(tick, 1000)