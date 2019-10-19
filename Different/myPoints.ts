export class MyPoints {

    constructor(private _x: number, public _y: string) {
       
    }
    get X() { return this._x }; 
    set X(value) { this._x = value };

    draw() {
        //обратите внимание на то, что со свойством x мы работаем через this
        console.log("X is: " + this._x);
        console.log("Y is: " + this._y);
    }

    ident() {
        console.log('Im ident from class MyPoint. Hi!');
    }
    //getDistanceBtw(another: AnotherPoint) {
    //    //посчитать и вернуть расстояние
    //}
}

let myPoint = new MyPoints(77, "line");  

myPoint.draw();  


