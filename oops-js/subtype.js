function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// The prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal
// Modify the code so that instances of Dog inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"