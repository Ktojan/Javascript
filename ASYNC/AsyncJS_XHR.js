
//   **************** JSONP *****************
{/*
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
*/
}
    
//   END OF ***** JSONP ******


//   **************** PROMISES *****************

// *** 1
{ 
    document.querySelector('#prom1').addEventListener('dblclick', function (e) {
       
        // Создаётся объект promise
        let prom1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                // переведёт промис в состояние fulfilled с результатом "result"
                resolve("perfect!");
                reject(new Error("время вышло!"));
            }, 1000);

        });

        // promise.then навешивает обработчики на успешный результат или ошибку
        prom1.then(
            good => {
                // первая функция-обработчик - запустится при вызове resolve
                alert("Fulfilled: " + good); // result - аргумент resolve
            },
            error => {
                alert("Rejected: " + error); // error - аргумент reject
            }
        );

    });
}



// END OF *** 1

var simplePro = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('** simplePro ** ');
    }, 2234);
})

var simpleProFuck = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('** simpleProFuck ** ');
    }, 834);
})

function first (val) {
    return "First func " + val
}

function second(val) {
    console.log('Second func ', val)
}

/*simplePro.then(first).then(second);
simpleProFuck.then(first).then(second);*/

// *** 2    XHR + Promise
{
    function httpGet(url) {

        return new Promise(function (res, rej) {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function () {
                if (this.status == 200) {
                    res(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    rej(error);
                }
            };

            xhr.onerror = function () {
                rej(new Error("Network Error"));
            };

            //xhr.send();
        });

    }



    //function sendPromise2() {
    //    httpGet("https://learn.javascript.ru/article/promise/user.json")
    //        .then(
    //        response => $('#sendPromise2').text(`Fulfilled: ${response}`),
    //        error    => $('#sendPromise2').text(`Rejected: ${error}`)
    //        );
    //}

    //   END OF ***** PROMISES ******

}


// ****************** Widget 

{
    
    //function getJSON(url) {
    //    return new Promise(function (resolve, reject) {
    //        const xhr = new XMLHttpRequest();
    //        xhr.open('GET', url);
    //        xhr.onreadystatechange = handleRes;
    //        xhr.onerror = function (error) { reject(error); };
    //        xhr.send();

    //        function handleRes() {
    //            if (this.readyState == 4) {
    //                if (this.status == 200) {
    //                    resolve(JSON.parse(this.responseText));
    //                } else {
    //                    reject(this.statusText);
    //                }
    //            }
    //        }
    //    });
    //}

   
    //function generateListItems(listItems) {
    //    var list = '';
    //    for (var d = 0; d < listItems.length; d++) {
    //        if (listItems[d].inoffice === true) {
    //            list += `<li class="in">${listItems[d].name}</li>`;
    //        } else {
    //            list += `<li class="out">${listItems[d].name}</li>`;
    //        }
    //    }
    //    console.table(list);
    //    return list;
    //}


    //function generateUnorderedList(list) {
    //    return '<ul class="bulleted">' + list + '</ul>';
    //}

    //function addEmployeesToPage(UnList) {
    //    document.getElementById('employeeList').innerHTML = UnList;
    //}



    //var p = getJSON('http://somejs.zzz.com.ua/employees.json') //TODO
    //    .then(generateListItems)
    //    .then(generateUnorderedList)
    //    .then(addEmployeesToPage).catch(function (e) {
    //        //console.log(e);
    //    });

    //var pError = getJSON('http://somejs.zzz.com.ua/employeesjson')
    //    .then(generateListItems)
    //    .then(generateUnorderedList)
    //    .then(addEmployeesToPage).catch(function (e) {
    //        //console.dir(e);
    //    });


}


//  *************************** ASYNC - AWAIT

/*function resolveAfter2Seconds(x) {
    return new Promise(res => {
        setTimeout(() => {
            res(x);
        }, 1500);
    });
}

resolveAfter2Seconds('1.5 secs')
    .then((val) => alert('then section + ' + val));*/

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}
//f1();


//let hello = async function () { return "Hello expr" }; ==
//var hello = async () => { ==
async function hello () {
    return greeting = await Promise.resolve("Hello from hell!");
};

//hello().then((val) => console.dir(val)); ==   // NOTABENE
//hello().then(alert);  


// ************************** Rewriting promise code with async/await ***********************
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await 

fetch('nice_girl.jpg')
    .then(response => response.blob())
    .then(myBlob => {
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });

