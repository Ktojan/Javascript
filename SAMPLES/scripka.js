go.addEventListener('click',
    function (e) {
        alert('button1');
        e.stopImmediatePropagation();
    },
    {capture: true}
);

go.addEventListener('click',
    function (e) {
        alert('button2');
    },
    {capture: true}
);

searchDiv.addEventListener('click',
    function (e) {
        alert('searchDiv');
        e.stopPropagation();
    }
);

searchForm.addEventListener('click',
    function () {
        alert('searchForm')
    }
);
///////////////

var $p = document.getElementsByTagName('p');
for (var k = 0; k < $p.length; k++)
{
    $p[k].addEventListener('click', function (e) {
        e.target.classList.toggle('done');
    })
}


//var newWin = window.open("about:blank", "hello", "width=190,height=200");
//newWin.moveTo(150, 120);

//newWin.document.write(
//    `<h1>Header 1 </h1>
//    <body>    
//    <input id="more" type="button" value="Enlarge window" /><br/>
//    <input id="less" type="button" value="Reduce window" />
//    <script>
//    more.onclick = function () {
//   window.resizeBy(27,12)
//console.log(window.innerHeight);
//    };
//    less.onclick = function () {
// window.resizeBy(-27,-12)
//console.log(window.innerHeight);
//    };
//    </script> 
//    </body>`
//);









