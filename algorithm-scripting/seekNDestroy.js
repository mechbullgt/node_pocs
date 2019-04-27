function destroyer(...arr) {
    let base = arr;
    let baseArr = base[0];
    console.log('baseArr :', baseArr);
    let destroyees = arr.slice(1);
    console.log('destroyees :', destroyees);
    let fresh = checkDestroyerInBase(baseArr, destroyees);
    return fresh;
  }

  // Keep finding the destroyee and shortening the base till non of the destroyee is found in the base.
  function checkDestroyerInBase(baseArr, destroyees){
      for (let x in destroyees){
        while(baseArr.includes(destroyees[x])){
            console.log('baseArr :', baseArr);
            let index = baseArr.indexOf(destroyees[x]);
            console.log('index :', index);
            baseArr.splice(index,1);
            console.log(baseArr);
        }  
      }
      return baseArr;
  }
  
let sol =destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log('sol :', sol);