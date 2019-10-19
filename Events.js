// Перемещение мяча по полю
{
    const ball = document.getElementById('ball'),
        radius = ball.clientWidth / 2;
    function replaceBall(e) {
        ball.style.left = e.offsetX - radius + 'px';
        ball.style.top = e.offsetY - radius + 'px';
    };
    $('#field').click(e => replaceBall(e));
}

// Checkbox. PreventDefault
{ 
    $("#checkbox1").click(function (e) {
        const $message = $("#output-box");
        $message.text("Look bro! preventDefault() won't let you check this!");
        $message.fadeOut(4700, function () {
            $(this).remove();
        });
        e.preventDefault();
    });
}


 // Работа с множественными слушателями при событии на элементе
{ 
//    function expand(e) {
//        e.currentTarget.style.width = (e.currentTarget.offsetWidth + 13) + 'px';
//        e.preventDefault();
//    }
 
//document.querySelector('#searchForm')
//    .addEventListener('contextmenu', e => expand(e));

//document.querySelector('#searchDiv')
//    .addEventListener('contextmenu', e => { expand(e); e.stopPropagation(); }/*, true*/);

//    document.querySelectorAll('[type="submit"]').forEach(el => {
//        el.addEventListener('contextmenu', e => {
//            expand(e);
//        });
//    })
}

// Делегирование для searchForm

function expandDeleg(event) {
    const el = event.target;
    event.preventDefault();
    if (el.type == "submit")
        el.style.width =
            (event.type == 'contextmenu') ? (el.offsetWidth + 11) + 'px'
                                          : (el.offsetWidth - 11) + 'px';
}

document.querySelector('#searchForm')
    .addEventListener('contextmenu', e => expandDeleg(e));
document.querySelector('#searchForm')
    .addEventListener('click', e => expandDeleg(e));
