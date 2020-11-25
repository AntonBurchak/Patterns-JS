/* =========================DECORATOR========================== */

/* (1) - mutate object */

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name + '!');
}

const anton = new Person('Anton');

anton.age = 19; // modified
anton.greet = function() { // modified
    console.log(`Hey! I am ${this.name} and I am ${this.age} years old!`);
}

anton.greet() //Hey! I am Anton and I am 19 years old!

/* /(1) - mutate object */





/* (2) - function inheritance */

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name + '!');
}

function AnotherPerson(name, age, ringtone) {
    Person.call(this, name);
    this.age = age;
    this.ringtone = ringtone;
}

AnotherPerson.prototype = Object.create(Person.prototype);
AnotherPerson.prototype.coolGreet = function() {
    console.log('WATS UP DUDE? I am ' + this.name + ', listen my ringtone ^_^ ... ' 
    + this.ringtone + ' playing...');
}

new AnotherPerson('Anton', 19, 'Jingle Bells').greet()
new AnotherPerson('Anton', 19, 'Jingle Bells').coolGreet()

/* /(2) - function inheritance */