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

