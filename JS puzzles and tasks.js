"use strict"
const log = console.log;
const table = console.table;
////////////////////

const buttons = document.querySelectorAll('.showAnswer');
const butDefaultText = "НУ ВСЕ СДАЮСЬ, НЕ МОГУ БОЛЬШЕ! ПОКАЗЫВАЙ ДАВАЙ!!";

buttons.forEach(but => but.innerText = butDefaultText);
buttons.forEach(el => el.addEventListener('click', function (e) {
    var butText = e.target.innerText;
    (butText == butDefaultText) ?
        e.target.innerText = "О, я так и думал! Ладно, свернуть" :
        e.target.innerText = butDefaultText;
    e.target.previousElementSibling.classList.toggle('reveal');
    })
);

/////////////////////////// ПРИМЕР 1.    (2).plus(3).minus(1) Должно выдавать 4


{
    Number.prototype.plus = function (value) {
        return this + value;
    }

    Number.prototype.minus = function (value) {
        return this - value;
    }
}

//ПРИМЕР 1a   ('Be').ad('gemot').space().ad('is the cat')
{
    String.prototype.ad = function (str) {
        if (typeof str != "string")
            str = prompt(str + ' is not a string! Define valid string for adding', '*');
        return this + str;
    }

    String.prototype.space = function () {
        return this + ' ';
    }
}

/////////////////////////// ПРИМЕР 2.    Between('*', '1', 'b', '1c')  ==>  '1*b*1c'
{
    //Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так,
    //чтобы она вернула строку '1*b*1c'

    function Between() {
        return [].slice.call(arguments, 1).join(arguments[0])
    }
}


///////////////////////////ПРИМЕР 3.     setTimeout внутри цикла
{
    // Что будет выведено в консоль, как можно модифицировать пример что бы он возвращал правильный результат(назовите как можно больше способов)?

    //for (var i = 0; i < 10; i++) {
    //    setTimeout(function () {
    //        console.log(i);
    //    }, 100);
    //}


    // вариант 1
    // console.dir('ПРИМЕР 3. setTimeout внутри цикла  вариант 1')
    //for (var i = 0; i < 5; i++) {
    //    (function (i2) {
    //        setTimeout(function () {
    //           console.log(i2);
    //        }, 1100);
    //    })(i);
    //}

    // вариант 2
   //  console.dir('ПРИМЕР 3. setTimeout внутри цикла  вариант 2')
    //const arr = [10, 12, 15, 21];
    //for (var i = 0; i < arr.length; i++) {
    //    // передадим функции переменную i, в результате
    //    // у каждой функции будет доступ к правильному значению индекса
    //    setTimeout(function (i_local) {
    //        return function () {
    //            console.log('Index: ' + i_local + ', element: ' + arr[i_local]);
    //        }
    //    }(i), 1000);
    //}

    //вариант 3 (лет)
   //  console.dir('ПРИМЕР 3. setTimeout внутри цикла  вариант 3')
    //for (let i = 0; i < 10; i++) {
    //    setTimeout(function () {
    //        console.log(i);
    //    }, 700);
    //}

    //вариант 4
    //  console.dir('ПРИМЕР 3. setTimeout внутри цикла  вариант 4')
    // for (var i = 0; i < 10; i++) {
    //    setTimeout(function (i) {
    //        console.log(i);
    //    }, 700, i);
    // }

    // вариант 5  TOLOOK bind
    //console.dir('ПРИМЕР 3. setTimeout внутри цикла  вариант 5')
    // for (var i = 0; i < 5; i++) {
    //    setTimeout(function (i) {
    //        log(i);
    //    }.bind(null, i), 1400);
    // }
}




/////////////////////////// ПРИМЕР 4.      отсортировать массив по датам
{
// Есть массив в котором лежат объекты с датами, отсортировать по датам.

//    var people = [
//        {
//            'Marceau': '5c3ca654cea6322f734b1240', 'date': '7/11/1966'
//        },
//        {
//            'Musk': 'Plan on 2023: cheap electro-spaceships to Mars, 4days-trip', 'date': '6/5/1975'
//        },
//        {
//            'DEd Moroz': 'wants Snegurka', 'date': '31/12/1908'
//        },
//        {
//            'Costner': 'Dances with bodyguard', 'date': '5/5/1975'
//        },
//        {
//            'Menshikov': null, 'date': '17/4/1163'
//        }
//    ];

//    people.forEach(el => {
//        //const year = el['date'].slice(-4),
//        //    day = el['date'].slice(0,2),
//        //    month = el['date'].slice(-7, -5);
//        var arr = el['date'].split('/');
//        var DateObj = new Date(arr[2], arr[1]-1, arr[0]);
//        el['DateObj'] = DateObj;
//        el['year'] = el['DateObj'].getTime();
//    });


//people.sort(function (a, b) {
//    return a['year'] - b['year'];
//});

//alternative
//var res = people.map(function (item) {    TOLOOK
//    return { date: item.date };
//});

//console.dir(res);
//console.table(res);
}


/////////////////////////// ПРИМЕР 5.       Палиндром   ( "А роза упала на лапу Азора".)
//  "Мокнет Оксана с котенком"   "«Я – урод!», - ору я"   "Косо сидел у леди сосок"
{

    function isPalindrom1(str) {
        const clearStr = str.toLowerCase().replace(/[^а-яА-ЯёЁ]/g, '');
        return clearStr ===  clearStr.split('').reverse().join('');           
    }

// длинно через цикл по символам
    function isPalindrom2(str) {
    var str = str.toLowerCase(),
        lim = str.length - 1,
        i = 0,
        j = lim;

    while (i <= lim) {
        if (/[^а-яА-ЯёЁ]/.test(str[i])) {
            i += 1;
        }
        if (/[^а-яА-ЯёЁ]/.test(str[j])) {
            j -= 1;
        }
        if (str[i] != str[j]) {
            return false;
        }
        i += 1;
        j -= 1;
    }
    return true;
}
}

/////////////////////////// ПРИМЕР 6.      f(2,3) == f(2)(3)
{
   // f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

    function Puzzle6(p) {
        var secondF = function (s) {
            return p + s;
        };

        return (arguments[1]) ? p + arguments[1] : secondF;
    }

    // Puzzle6_(0)(3)(-1)(5)() -> 7    (рекурсия)  tolook recursion

    function Puzzle6_(arg) {
        var value = arg;
debugger
        return function (arg) {
            if (arg !== undefined) {
                return Puzzle6_(value + arg);
            } else {
                return value;
            }
        }
    }

 
}



////////////////////////// ПРИМЕР 7.      seven(plus(one())) -> 8

    //Реализовать методы seven, plus, one, five, minus, two.
    //seven(plus(one())) -> 8. 
    //five(minus(two())) -> 3

    //Вариант 1. Красиво и просто, без вложенностей
    // function one(arg) {
    //     return 1 + (arg || 0);
    // }

    // function two(arg) {
    //     return 2 + (arg || 0);
    // }

    // function five(arg) {
    //     return 5 + (arg || 0);
    // }

    // function seven(arg) {
    //     return 7 + (arg || 0);
    // }

    // function plus(arg) {
    //     return arg;
    // }

    // function minus(arg) {
    //     return -arg;
    // }

  ////////////// #2#

    // function four(arg) {
    //     return 4 * (arg || 1);
    // }

    // function twelve(arg) {
    //     return 12 * (arg || 1);
    // }

    // function div(arg) {
    //     return 1/arg;
    // }

    // function mltp(arg) {
    //     return arg;
    // }

    //twelve(div(four(mltp(twelve()))))  -> 0.25

    //Вариант 2. Более мудрено и кратко

    // function one_(arg) {
    //     return (typeof arg === 'function') ? arg(1) : 1;
    // }

    // function seven_(arg) {
    //     return (typeof arg === 'function') ? arg(7) : 7;
    // }

    // function minus_(arg) {
    //     return function (a) {
    //         return a - arg;
    //     }
    // }


/**
/////////////////////////// ПРИМЕР 8. add(num1)(num2)
    
     Напишите функцию умножения вида mult(num1)(num2)(num3)..()  на ES6
    Примечание: Количество слагаемых не ограничено
     */

    // const add = (a) => {
    //     let sum = a;
    //     const func = (b) => {
    //         if (b) {
    //             sum += b;
    //             return func;
    //         } else {
    //             return sum;
    //         }
    //     };
    //     return func;
    // };
    // add(2)(3)(); // 5;

    // Вариация на тему
    // const mult = (p) => {
    //     let res = p;
    //     const inner = (s) => {
    //         debugger
    //         if (typeof s != 'undefined') {
    //             res *= s;
    //             return inner;
    //         } else return res;
    //     }
    //     return inner;
    // }

        //  mult(3)(-1.5)(10)(-2)()  => 90
        //  mult(3)(false)('')(-2)() => -0

    // Дополнительное условие: Убрать в конце лишние скобки  tolook es6

    const addHard = (a) => {
        let sum = a;
        const func = (b) => {
            sum += b;
            return func;
        };
        func.valueOf = () => sum;
        return func;
    };
    //console.log(addHard(2)(3)); // 5;


/////////////////////////// ПРИМЕР 9.  Fizzbuzz
//  Fizzbuzz(31) ->   1  2  fizz  4  buzz  fizz  7  8  fizz  buzz  11  fizz  13  14  fizzbuzz  16  17  fizz  19  buzz  fizz  22  23  fizz  buzz  26  fizz  28  29  fizzbuzz  31

{
    function Fizzbuzz(n) {
        var res = [];
        function div5(num) {
            return (num/5) === Math.trunc(num/5);
        }
        function div3(num) {
            return (num / 3) === Math.trunc(num / 3);
        }
        for (var t = 1; t <= n; t++) {
            if (div5(t)) {
                (div3(t)) ? res.push('fizzbuzz') : res.push('buzz')
            } else if (div3(t)) {
               res.push('fizz')
            } else {
                res.push(t)
            }
        }
        console.dir(res.join('  '));
    }


    //Fizzbuzz(5)
}



const MM = {
    'lovers': {
        'he': 'Master',
        'she': 'Margarita'
    },
    'devils_team': [{
        'name': 'Voland',
        'isChief': true
    },
    {
        'name': 'Azazello',
        'isChief': false
    },
    {
        'name': 'Fagot',
        'isChief': false
    }]
}



