// Every method is like all in or all out.
function checkPositive(arr) {
    // Add your code below this line
    let flag = arr.every(function(x){
        return x>0
    })
    if(flag==false) return false;
    return true;
    // Add your code above this line
  }
let after = checkPositive([1, 2, 3, -4, 5]);
console.log('after :', after);