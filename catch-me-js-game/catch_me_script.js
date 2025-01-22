const div = document.querySelector('#undivable');
const button = document.querySelector('#unstoppable');
button.style.padding = '16px';
div.style.transform = 'rotate(15deg)';
div.style.width = '12%'

function buttonWanderings(e) {
    e.stopPropagation();
    const hor = Math.round(Math.random()*8);
    const ver = Math.round(Math.random()*8);
    div.style.left = hor*10 + '%';
    div.style.top = ver*10 + '%';
    console.log(button.style.padding);
    div.style.width = Math.max(3, +div.style.width.slice(0,-1) - 1) + '%';
    console.log(div.style.width);
    let moving = setInterval(() => {
        const sign = Math.random()>0.5 ? 1 : -1;
        const leftShift = Math.min(80, +div.style.left.slice(0, -1) + hor*3*sign);
        const topShift = Math.min(80, +div.style.top.slice(0, -1) + hor*3*sign);
        console.log(leftShift, topShift);
        div.style.left = Math.max(0, leftShift) + '%';
        div.style.top = Math.max(0, topShift) + '%';
        }, 400);
    setTimeout(() => clearInterval(moving), 2000);
}

// button.addEventListener('mouseover', buttonWanderings);
button.addEventListener('click', () => requestAnimationFrame(step));

div.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    button.removeEventListener('mouseover', buttonWanderings);
    //todo  congrats animation and button pulse
    alert('Ну какой молодец!');
})

let start;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;
  console.log(elapsed)
  // Math.min() is used here to make sure the element stops at exactly 200px
  const shift = Math.min(0.1 * elapsed, 200);
  console.log('shift', shift);
  button.style.transform = `translateX(${shift}px)`;
  if (shift < 200) {
    const id = requestAnimationFrame(step);
    if (shift >100 ) window.cancelAnimationFrame(id);
  }
}

