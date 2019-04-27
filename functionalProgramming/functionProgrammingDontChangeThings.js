// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  let newValue = ()=>fixedValue+1;
  return newValue();
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log('newValue :', newValue);
console.log(fixedValue); // Should print 4