var live = {
    makeShit: true
}



function Plants(name) {
	this.name= name;
	this.canWalk = false;
	this.can = function () {
  	  this.name += ' (могу расти)';
    }
}


function Mineral(name) {
	this.name= name;
	this.canWalk = false;
	this.can = function () {
  	  this.name += ' (ничего не могу, я минерал, блеать!)';
    }
}

function Birds() {
    this.name;
    this.first_name; 
    this.last_name;
    this.canWalk = true;
 
}

function getFullName () {
    return this.first_name + ' ' + this.last_name;
}

function setFullName(name) {
    var name_ar = name.trim().split(/\s+/);
    this.first_name = name_ar[0];
    this.last_name = name_ar[1];
}

Birds.prototype = live;  // наследование
alert(live.makeShit);
var things = [];
var chaika = new Birds();

Object.defineProperty(chaika, 'name', {
    get: getFullName
    , set: setFullName
    , writtable: true
    , enumerable: false
}
);

chaika.name = 'Джонатан Ливингстон';
chaika.can = function () {
    this.last_name += ' чайка по-небу-летайка'
}

things[1]  = chaika;
things[2]  = new Plants('одуван');
things[3]  = new Mineral('антрацит');
things[4]  = new Plants('бабабаб');

console.log(Object.keys(things[1]));
for (var k in chaika) { console.log(k + '  ') };
	
 for (var t=1; t<things.length; t++) {
Object.defineProperty(things[t], 'toString'
	, { value:  function () { 
		this.can(); 
		return ((this.canWalk) ? '\n Я подвижный такой существо ' 
            : '\n Я неподвижный субъект мироздания ') + this.name;
		} 
	, enumerable: false
         });

console.log(things[t].toString());
     console.log(Object.keys(things[t]) + '\n');
}

 


