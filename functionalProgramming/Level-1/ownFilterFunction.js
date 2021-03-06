// the global Array
var s = [23, 65, 98, 5];

// Filter would return array only for true values on callback.
Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  for(let x =0; x<this.length;x++){
      if(callback(this[x])){
        newArray.push(this[x]);
      }
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log('new_s :', new_s);