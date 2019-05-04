"use strict";

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let flArr = firstAndLast;
    console.log('flArr :', flArr);
    // get first name
    this.getFirstName = function(){
        return flArr.split(" ")[0];
    };
    // set first name
    this.setFirstName= function(firstName){
        flArr = firstName+" "+flArr.split(" ")[1];
    };
    // get last name
    this.getLastName = function(){
        return flArr.split(" ")[1];
    };
    // set last name
    this.setLastName = function(lastName){
        flArr = flArr.split(" ")[0]+" "+lastName;
    };
    // get full name
    this.getFullName = function() {
      return flArr.split(" ")[0]+" "+flArr.split(" ")[1];
    };
    // set full name
    this.setFullName = function(fl){
        flArr = fl.split(" ")[0]+" "+fl.split(" ")[1];
    }
  };
  
  var bob = new Person('Bob Ross');
