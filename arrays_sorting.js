let arrOne, arrTwo;

document.querySelector('#arrOne').addEventListener('click', function (e) {
    arrOne = ArraysFactory();
    e.target.disabled = true;
    document.querySelectorAll('.arrayMod').forEach((el) => el.style.display = 'block');
    document.querySelector('#arrTwo').style.display = 'inline-block';

});

document.querySelector('#arrTwo').addEventListener('click', function (e) {
    arrTwo = ArraysFactory();
    e.target.disabled = true;
});

function getArray() {
    return (arrTwo) ? arrTwo : arrOne;
}

function ArraysFactory() {
    const elemNumber = prompt('how many elements your Highness does want?', 'more that 2');
    if (elemNumber > 2) {
        var array = [];

        for (var x = 0; x < elemNumber - 2; x++) { // 2 elems will be added bit later
            let ranEl = Math.random().toFixed(2) * 100;
            ranEl = Math.trunc(ranEl);
            if (x / 3 === (x / 3 ^ 0)) { ranEl *= -1; } // make each third elem negative
            array.push(ranEl);
        }
        array = array.concat(0, array[0]); //add two more elements, zero and the same as first
        console.table(array);
        return array;
    }
}


function sorterDefault(arr = getArray()) {
    console.table(arr.slice().sort());
}
document.querySelector('#sorterDefault').addEventListener('click', () => sorterDefault());

function sorterSimple(arr = getArray()) {
    console.table(arr.slice().sort(order));

    function order(a, b) { return a - b;}   
}
document.querySelector('#sorterSimple').addEventListener('click', () => sorterSimple());


function sorterRandomOrder(a, b) { // элементы упорядоченного массива в случайном порядке
    return Math.random() - 0.5;
}

function getRandomBetween(min, max) { // случайные числа в диапазоне min-max
    for (var m = 0; m < max; m++) {
        console.dir(Math.floor(Math.random() * (max - min)) + min);
    }
}

//Сумма четных чисел массива. REDUCE()
function sumOfOdds(arr = getArray()) {
    console.table(arr.reduce(function (sum, cur) {
        if (cur / 2 === Math.trunc(cur / 2)) {
            return sum + cur;
        } else {
            return sum;
        }
    }, 0));
}
document.querySelector('#oddsSum').addEventListener('click', () => sumOfOdds())


/*
range – диапазон чисел от from до to, и мы хотим, чтобы for (let num of range) «перебирал»
этот объект. При этом под перебором мы подразумеваем перечисление чисел от from до to.
*/

function insideRange(arr = getArray()) {
    let range = {
        from: Number(prompt('from?')),
        to: Number(prompt('to?'))
    };
    let res = [];
    for (let el of arr) if (el >= range.from && el <= range.to) res.push(el);
    console.table(res);
}
document.querySelector('#insideRange').addEventListener('click', () => insideRange())


//[1, [1, 2, [3, 4]], [2, 4]] -> [1, 1, 2, 3, 4, 2, 4]
function MarryArrays() {
    let mas = [1, [true, 'second', [3, NaN]], ['array', [], -5]], 
        resMas = [];
    console.dir(mas);
    removeMas(mas);
    function removeMas(mas) {
        mas.reduce(function (res, cur) {
            (cur.__proto__.constructor.name !== "Array") ?
                resMas.push(cur)                        
                : removeMas(cur);
        }, null);
    }
    return resMas;
}
document.querySelector('#MarryArrays').addEventListener('click', function (e) {
    this.innerText = 'RESULT IS: ' + MarryArrays().toString();
});

//brief decision TOLEARN
const flatten = (arr) => arr.reduce(
    (flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ?
        flatten(toFlatten)
        : toFlatten), []);



// PALINDROM DETECTOR  'Racecar'   'Was it a car or a cat I saw' 'A nut for a jar of tuna'
const pali = ['Racecar!', 'Was it a car or a cat I saw?', 'A nut for a jar of tuna.'];
//console.table(pali);   

let isPali = str => {
    str = str.toLowerCase();
    const cleanArr = str.split('').filter(el => el !== " " && el !== "?" && el !== "!" && el !== ".");
    return cleanArr.join('') === cleanArr.reverse().join('');
}


///////////////////////////////////////////////////////////////////////////////////
//  CHAIN OF ARRAY-MANIPULATIONS  //////////

let products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Magnum 40", price: 7560, stock: 0 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];

products.forEach(item => { if (item.stock === 0) item.absent = true });
let totalValue = products
    .filter(item => !item.absent)
    .reduce((prev, item) => prev + (item.price * item.stock), 0);


//console.table(products);
//console.dir(totalValue);




