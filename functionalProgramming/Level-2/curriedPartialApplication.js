/**
 * The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

 * @param {number} x 
 */
function add(x) {
    // Add your code below this line
    return function(y){
      return function(z){
        return x+y+z;
      }
    }
    
    // Add your code above this line
  }
let soln =  add(10)(20)(30);
console.log('soln :', soln);
let sol2 = add(10)(20);
console.log('sol2 :', sol2);