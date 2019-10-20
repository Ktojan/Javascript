"use strict"
const log = console.log;
const table = console.table;

///////////////////////////////////

function hollyShitBegins(e) {
    document.body.removeChild(e.target);
    const content = document.body.innerHTML;
    const style = document.body.style;
    document.body.innerHTML = '';
    document.body.style.backgroundColor = 'firebrick';
    document.body.style.color = 'yellow';
    let phrase = document.createElement('p'), n = 2;
    phrase.style.fontSize = '10px';
    phrase.innerText = "MATRIX HAS YOU...  ";  
    document.body.appendChild(phrase);
    console.log(phrase.style.fontSize);
    var tick = window.setInterval(function () {
        phrase.style.fontSize = 10 + n + 'px';
        phrase.innerText = "MATRIX HAS YOU... ".repeat(Math.pow(2,n));
        n++;
    }, 900);
    document.body.addEventListener( 'keyup', () => {
        clearInterval(tick);
        document.body.innerHTML = content;
        document.body.style = style;
    });
}

///////////////////////////  CALL, APPLY, 
/// TASK 1: select only booleans from function arguments, put in an array
{
    
    function selectBooleans() {
        var args = [].filter.call(arguments, function (el) {
            return typeof el === "boolean";
        });
        console.dir(args);
    }

    //selectBooleans(false, 'Такой', true, null, 'мир3', 'true', '6', 0); 


    //^^^^^^ apply/call для цепочки наследования классов
    {
        function Animal(name) {
            this.name = name;
        }

        Animal.prototype.walk = function () {
            alert("ходит " + this.name);
        };
        var an = new Animal("Лемминг");

        function Rabbit(name) {
            Animal.apply(this, arguments);
        }
        Rabbit.prototype = Object.create(Animal.prototype);

        Rabbit.prototype.walk = function () {
            alert("прыгает " + this.name);
        };

        var rabbit = new Rabbit("Кроль");
        // rabbit.walk();

    }

    //^^^^^^ apply/call для цепочки наследования классов
    {
        function Product(name, price) {
            this.name = name;
            this.price = price;
            return this;
        }

        Product.prototype.sell = function () {
            alert(this.name + ' is sold!');
        }


        function Food(name, price) {
            Product.call(this, name, price);
            this.category = 'еда';
        }

        Food.prototype = Object.create(Product.prototype);

        function Toy(name, price) {
            Product.call(this, name, price);
            this.category = 'игрушка';
        }

        var cheese = new Food('фета', 5);
        var fun = new Toy('робот', 40);
    }

    //^^^^^^ apply/call для добавления методов внутрь массива объектов
    {
        var animals = [
            { species: 'Лев', name: 'Король' },
            { species: 'Кит', name: 'Фэйл' },
            { species: 'Медоед', name: 'Безумец' }
        ];

        for (var i = 0; i < animals.length; i++) {
            (function (i) {
                this.print = function () {
                    console.log('#' + i + ' ' + this.species
                        + ': ' + this.name);
                }
                //this.print();
            }).call(animals[i], i);
        }
    }


    //^^^^^^ apply/call для нахождения мин\макс в массиве  

    var numbers = [5, 6, -2, 3, 0, 17];

    var mn = Math.min.apply(null, numbers);
    var mx = Math.max.apply(null, numbers);
}

///////////////////////// BIND

// let user = {
//     firstName: "Вася",
//     say(phrase) {
//       alert(`${phrase}, ${this.firstName}!`);
//     },
//     kill(weapon) {
//         confirm(`Let's finish ${this.firstName} using a ${weapon}!`)
//     }
//   };

// const killBill = user.kill.bind(user);
// //killBill('spear');

// // привязка всех методов объекта
// for (var p in user) {
//     if (typeof user[p] == 'function') user[p] = user[p].bind(user)
// }
// user.kill('bomb')


//////////////////////////////

function divide(x,y) { return y/x};

const getHalf = divide.bind(null, 2);



function makeArr() {
    return Array.prototype.slice.call(arguments);
}
let superMake = makeArr.bind(null, `Array from arguments:`);



// function askPassword(login) {
//     const name = 'wrong context name';
//     let password = prompt("Password?", '');
//     if (password == "rock") login(true);
//     else login(false);
//   }
  
//   let user = {
//     name: 'Matthew',
  
//     login(result) {
//         alert( this.name + (result ? ' logged in' : ' failed to log in') );
//       }
//   };
//   askPassword(user.login.bind(user));

//////////// #2

  function askPassword(ok, fail) {
    const name = 'wrong context name';
    let password = prompt("Password?", '');
    if (password == "rock") ok();
    else fail();
  }
  
  let user = {
    name: 'Matthew',
  
    login(result) {
        log( (this.name + (result ? ' logged in' : ' failed to log in')).toUpperCase() );
    }
  };
  //askPassword(user.login.bind(user, true), user.login.bind(user, false));
  askPassword(() => user.login(true), () => user.login(false));


/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////     СТРОКИ. МЕТОДЫ РАБОТЫ СО СТРОКАМИ

//^^^^^  replace + regexp для перестановки слов  TOLOOK regexp

var re = /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)/;
var str = 'Джон Семенович Смит';
var newstr = str.replace(re, '$3, $1 $2');
//console.log(newstr); // Смит, Джон Семенович



//^^^^^^^^ indexOf
function findAllOccurs() {
    let str = 'Ослик Иа-иа посмотрел на виадук и а промолвил: ИА!';
    console.table(str.split(''));
    let target = 'иа'; // цель поиска
    //let pos = 0;
    //while (true) {
    //    let res = str.indexOf(target, pos);
    //    if (res == -1) break;
    //    console.log(`found at ${res}`);
    //    pos = res +  1;
    //}

// более краткая запись
    let pos = -1;
    while ((pos = str.toLowerCase().indexOf(target, pos + 1)) != -1) {
        console.log(`found at ${pos}`);
    }
}






//^^^^^^^^^^  chars codes Unicode

function displayCodesForDiapasone(start, end) {
    let res = {},
        code = start.codePointAt(0);
    while (String.fromCodePoint(code-1) != end) {
        res[String.fromCodePoint(code)] = code;
        code++;
    }
    console.table(res);

}

//^^^^^^^^^  sorting strings
/*Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:

Отрицательное число, если str меньше str2.
Положительное число, если str больше str2.
0, если строки равны.

alert('Österreich'.localeCompare('Zealand')); // -1   */


////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// Геттеры, сеттеры
{
    function CoffeeMachine(power, capacity) { // capacity - ёмкость кофеварки
        var waterAmount = 0;

        var WATER_HEAT_CAPACITY = 4200;

        this.setWaterAmount = function (amount) {
            if (amount < 0 || !Number(amount)) {
                throw new Error('Значение должно быть положительным');
            } else if (amount > capacity) {
                throw new Error("Нельзя залить воды больше, чем " + capacity);
            }
            waterAmount = amount;
        }

        this.getWaterAmount = function (amount) {
            return waterAmount + 'litres';
        }
    }
}