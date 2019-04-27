function alphabeticalOrderMutate(arr) {
    // Add your code below this line
    return arr.sort((a,b)=>{
        return a>b
    })
    // Add your code above this line
  }
  let order = alphabeticalOrderMutate(["a", "d", "c", "a", "z", "g"]);
  console.log('order :', order);

  function alphabeticalOrderNonMutate(arr) {
    // Add your code below this line
    let newArr = arr.slice();
    newArr.sort((a, b)=>{
        return Number(a)-Number(b);
    })
    return newArr;
    // Add your code above this line
  }
  let order2 = alphabeticalOrderNonMutate(["a", "d", "c", "a", "z", "g"]);
  console.log('order2 :', order2);