export class MyPoints {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get X() { return this._x; }
    ;
    set X(value) { this._x = value; }
    ;
    draw() {
        //обратите внимание на то, что со свойством x мы работаем через this
        console.log("X is: " + this._x);
        console.log("Y is: " + this._y);
    }
    ident() {
        console.log('Im ident from class MyPoint. Hi!');
    }
}
let myPoint = new MyPoints(77, "line");
myPoint.draw();
