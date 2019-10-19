
const obj = $('#go');
obj.click(function () {
        moveSlightly();
    }
);
var start = null;

function moveSlightly(timestamp) {
    console.dir(timestamp);
    if (!start) start = timestamp;
    var progress = timestamp - start;
    obj.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
    obj.style.transition = 'transform 0.7s ease-in-out';
    if (progress < 3000) {
        window.requestAnimationFrame(moveSlightly);
    }
}


