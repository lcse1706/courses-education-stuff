const Car = function(name) {
    this.name = name;
}

const beatle = new Car('bullet');
const bmw = new Car('Spedo');

//Prototype

const Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
}

Person.prototype.addChildren = function(name) {
    this.children.push(name);
}


const philip = new Person('Philip', 24);
const monica = new Person('Monica', 28);

//Prototype 2

const Citizen = function (country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
}

Citizen.prototype.changeCitizenship = function(citizenship) {
    this.citizenship = citizenship
}

const polish = new Citizen ("poland", "polish");
const svensk = new Citizen ("sweden", "swedish");

//Prototype 3

//prototype chain

svensk.__proto__ // Citizen
svensk.__proto__.__proto__ // Object
svensk.__proto__.__proto__.__proto__ // Null

Object.prototype.age = 20;

svensk.age //20

//instanceof

svensk instanceof Citizen //true
svensk instanceof Object // true
svensk instanceof Person // false

// Object.getPrototypeOf