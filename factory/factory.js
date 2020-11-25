/* Dog */
function Dog(name) { this.name = name; }

Dog.prototype.sound = function() { console.log(`Dog ${this.name} says woof!`) }

/* Cat */
function Cat(name) { this.name = name; }

Cat.prototype.sound = function() { console.log(`Cat ${this.name} says meow!`) }

/* Rabbit */
function Rabbit(name) { this.name = name; }

Rabbit.prototype.sound = function() { console.log(`Rabbit ${this.name} says frrrr!`) }

/* =======================Factory========================== */

function AnimalFactory() {};

AnimalFactory.prototype.animalType = Dog;

AnimalFactory.prototype.createAnimal = function(type, ...args) {
    switch (type) {
        case 'dog':
            this.animalType = Dog;
            break;
        case 'cat':
            this.animalType = Cat;
            break;
        case 'rabbit':
            this.animalType = Rabbit;
            break;
        default:
            break;
    }
    return new this.animalType(...args);
}

/* =======================/Factory========================== */

const animalFactory = new AnimalFactory();
const jessie = animalFactory.createAnimal('dog', 'Jessie');
const murchik = animalFactory.createAnimal('cat', 'Murchik');
const fanka = animalFactory.createAnimal('rabbit', 'Fanka');
jessie.sound()
murchik.sound()
fanka.sound()