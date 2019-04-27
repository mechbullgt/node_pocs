// Using this for the current object's property, avoid using name of the object which might change.
let duck = {
    name: "maq",
    numLegs: 4,
    sayName: function () {
        return "I am a duck, my name is " + this.name + ".";
    }
}

// console.log(duck.sayName());

// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.
/**
 *  Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
    Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
    Constructors define properties and behaviors instead of returning a value as other functions might.
 */

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Our New Dog
let hound = new Dog();
//   console.log(hound);


// Parameterized Constructor
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("newDog", "green");

// If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);
//  console.log(myHouse instanceof House);

  // Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code
  function Dog(name){
      this.name =name
  }

  Dog.prototype.numLegs=2;
  Dog.prototype.creator="God";

  let myDog = new Dog("Jimmy");
//   console.log('myDog :', myDog.creator);

// Own Property Vs Prototype Propterty

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Add your code below this line 
  for (let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }
  
  console.log(ownProps);
  console.log(prototypeProps);
  