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

//Classes

class Animal {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    breathe() {
        console.log("Animal breathe");
    }
}

const puppy = new Animal(1, "Buddy")

class Mammal extends Animal {
    constructor(age, hairs, name) {
        super(age, name)
        this.hairs = hairs;
    }
    drinkMilk() {
        console.log("Drink milk");
    }
}

const ssak = new Mammal (3, 'blond', "Maks");

ssak.breathe();
ssak.drinkMilk();

class Human extends Mammal {
    constructor(age, hairs, name, language) {
        super(age, hairs, name)
        this.language = language;
    }
    speak () {
        console.log("Human Speaks")
    }
}

const person = new Human(32, "black", "Lukas", "svenska");


// This

'use strict'  // tryb ścisły

const fn = function () {
    this.a = 5;
}

fn();

function showName() {
    console.log(this.name)
}

const gustav = {
    name: 'Gustav',
    showName: showName,
}

const agnes = {
    name: 'Agnes',
    showName: showName,
}

agnes.showName();
gustav.showName();

//call and apply method

const human = {
    personnummer: 8904186541,
}

const showPn = function(name) {
    console.log(`This is personnumer ${this.personnummer} of the person ${name}`)
}

showPn.call(human, 'Kalle');

//apply works the same as call, but its possible to give array as arguments of function.

//bind method

const userData = showPn.bind(human, 'Eva');

console.log(userData())


// arrow funtion - inherit from olders.

const cat = {
    age: 8,
    showAge() {
        console.log(this.age, this)
    },
    showAge2: () => {
        console.log(this.age, this)
    }
}

// cat.showAge();
// cat.showAge2();

//bond loss problem

const szarik = {
    children: ['buddy', 'frog'],

    showChildren: function () {
        this.children.forEach(function(child, index) {
            console.log(this);
        })
    }
}

// szarik.showChildren();

//Solution 

// 1.that = this

const szarik1 = {
    children: ['buddy', 'frog'],

    showChildren: function () {
        const that = this;
        this.children.forEach(function(child, index) {
            console.log(that.children[index]);
        })
    }
}

// szarik1.showChildren();

// 2. fo...of loop

const szarik2 = {
    children: ['buddy', 'frog'],

    showChildren: function () {
        for (const child of this.children) {
            console.log(child);
        }
        }
    }

// szarik2.showChildren();

// 3. Arrow Function

const szarik3 = {
    children: ['buddy', 'frog'],
    showChildren: function() {
        this.children.forEach((child, index) => {
            console.log(this.children[index]);
        })
    }
}

// szarik3.showChildren();

// 4. bind

const szarik4 = {
    children: ['buddy', 'frog'],
    showChildren: function() {
        this.children.forEach(function(child, index) {
            console.log(this.children[index]);
        }.bind(this))
    }
}

// szarik4.showChildren();

// 5. set permanent callback ass this

const szarik5 = {
    children: ['buddy', 'frog'],
    showChildren: function() {
        this.children.forEach(function(child, index) {
            console.log(this.children[index]);
        }, this)
    }
}

szarik5.showChildren();

// Hide data

// 1. Convention -  _color

class Cat {
    constructor(color) {
          this._color = color
    }
    getColor() {
        return this._color;
    }
    setColor(value) {
        if (color === "string"){
            return this._color = value;
        } else {
            console.log('Wrong Value.')
        }
    }
}

const Simba = new Cat('black');

// 2. Closure 

 // Example 1

class Dog {
    constructor(name, color){
        this.name = name;
        let _color = dogColor;
        this.getColor = () => color;
        this.setColor = (color) => _color = color;
    }

}

// Example 2


class Vehicule {
    constructor(name, counter, year) {
        this.name = name;
        let _counter = counter;
        let _year = year;
        let _changeCounter = 0;

        this.getCounter = function(){
            if(_changeCounter) alert(`Milage was changed ${_changeCounter} time/times`)
            return _counter;
        }
        this.getYear = () => _year;

        this.setCounter = function(value){
            _changeCounter++;
            return _counter = value;
        }

        

    }
}

const mercedes = new Vehicule ("Mercedes", "80000", "2018");

