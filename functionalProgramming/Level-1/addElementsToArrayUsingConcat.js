function nonMutatingPush(original, newItem) {
    // Add your code below this line
    let newArr = original.slice();
    return newArr.concat(newItem);
    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
let after=  nonMutatingPush(first, second);
console.log('after :', after);