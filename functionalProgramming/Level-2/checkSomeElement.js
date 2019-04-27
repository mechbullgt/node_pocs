function checkPositive(arr) {
    // Add your code below this line
    let flag = arr.some(function(x){
      return x>0
    })
    if(flag == true) return true;
    return false;
    // Add your code above this line
  }
let after= checkPositive([1, 2, 3, -4, 5]);
console.log('after :', after);