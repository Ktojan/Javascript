

class MyClass {
    constructor(name, weather) {
        this.name = name;
        this._weather = weather;
    }

    set weather(value) {
        this._weather = value;
    }
    get weather() {
        return `Today is ${this._weather}`;
    }

    printMessages() {
        console.log("Hello " + this.name + ". ");
        console.log(this.weather);
    }
} 

class WeatherInCity extends MyClass {
    constructor(name, weather, city) {
        super(name, weather);
        this.city = city;
    }

    printMessages() {
        super.printMessages();
        console.dir(`Yeah, I'm in the fucking ${this.city}!`);
    }
}

class DrugsHere extends WeatherInCity {
    constructor(name, weather, city) {
        super(name, weather, city);
    }

    printMessages() {
        super.printMessages();
    }

    setMeeting() {
        this.city = prompt('city?');
        this.place = (this.city == "Albuquerque") ? "Los Pollos" : `I don't work there`;
        console.table(this);
        alert(this.place)
    };
}

//let sample1 = new MyClass('Noah', 'hard rain');
//console.table(sample1);
//sample1.printMessages();
//let walter = new DrugsHere('Walter', 'hot, always hotGod damn', 'Albuquerque');
//walter.printMessages();
//walter.setMeeting();
