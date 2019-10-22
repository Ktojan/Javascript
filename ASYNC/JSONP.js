//   **************** JSONP *****************
{
    //var myDisplayFunction = {}; // реестр

    function scriptRequest(url, onSuccess, onError) {

        var scriptOk = false;
       // var callbackName = 'cb' + String(Math.random()).slice(-6);
        var script = document.createElement('script');

        // укажем это имя в URL запроса
        url += ~url.indexOf('?') ? '&' : '?';
        url += 'callback=myDisplayFunction';// + callbackName;

        // ..и создадим саму функцию в реестре
        myDisplayFunction = function (data) {  // [callbackName]
            scriptOk = true; // обработчик вызвался, указать что всё ок
            //delete myDisplayFunction[callbackName]; // можно очистить реестр
            onSuccess(data); // и вызвать onSuccess
        };

        // эта функция сработает при любом результате запроса
        // важно: при успешном результате - всегда после JSONP-обработчика
        function checkCallback() {
            if (scriptOk) return; // сработал обработчик?
            //delete myDisplayFunction[callbackName];
            onError(url); // нет - вызвать onError
        }

        //script.onreadystatechange = function () {
        //    if (this.readyState == 'complete' || this.readyState == 'loaded') {
        //        this.onreadystatechange = null;
        //        setTimeout(checkCallback, 0); // Вызвать checkCallback - после скрипта
        //    }
        //}

        // события script.onload/onerror срабатывают всегда после выполнения скрипта
        script.onload = script.onerror = checkCallback;
        script.src = url;

        document.body.appendChild(script);
    }

    // onload/onerror
    var img = new Image();
    //img.onload = function (e) { console.dir(e) }
    //img.onerror = function (er) { console.dir('error ', er) }
    img.src = "school-classes/1.jpg";
}