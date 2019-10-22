


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



    function sendPromise2() {
       httpGet("https://learn.javascript.ru/article/promise/user.json")
           .then(
           response => $('#sendPromise2').text(`Fulfilled: ${response}`),
           error    => $('#sendPromise2').text(`Rejected: ${error}`)
           );
    }

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




// ************************** Rewriting promise code with async/await ***********************
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await 

// fetch('nice_girl.jpg')
//     .then(response => response.blob())
//     .then(myBlob => {
//         let objectURL = URL.createObjectURL(myBlob);
//         let image = document.createElement('img');
//         image.src = objectURL;
//         document.body.appendChild(image);
//     })
//     .catch(e => {
//         console.log('There has been a problem with your fetch operation: ' + e.message);
//     });

  
    document.getElementById('showCoffeeCup').addEventListener('click',
     () => showCoffee('../assets/coffee.jpg', 'blob', displayImage));

    function showCoffee(url, type, callback) {
        const xhr = new XMLHttpRequest();

        xhr.responseType = type;
        xhr.open('GET', url);
        xhr.onload = function() { callback(xhr.response)};
        xhr.send();
    }
    
    function displayImage(blob) {
        let objectURL = URL.createObjectURL(blob);      
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    }


    function loadLodash (src, callback) {
        let lod = document.createElement('script');
        lod.src = src;
        lod.type= "text/javascript";
        lod.onload = () => callback(null, lod);
        lod.onerror = () => callback(new Error('failed load Lodash'))

        document.head.appendChild(lod);
    }

    loadLodash('https://cdnjs.cloudflare.com/ajax/libs/lodash.##js/3.2.0/lodash.js', function(error, script) {
        if (error) {
            console.error(error);
        }
        else console.log(`${script.src} успешно загружен!`);
    })


    