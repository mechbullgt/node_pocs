function Car(name) {
    this.model = name;
}
// Change the Prototype to a New Object
Car.prototype = {
    // Remember to Set the Constructor Property when Changing the Prototype
    constructor: Car,
    wheels: 4,
    about: function () {
        console.log("This is model " + this.model);
    },
    insurance: function () {
        console.log("Insurace is subjected to market risk and value");
    }
}

let carObj = new Car("S");
console.log('carObj :', carObj.wheels);

let checkPrototype = Car.prototype.isPrototypeOf(carObj);
console.log('checkPrototype :', checkPrototype);

/**
 * In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck.
Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.
 */

