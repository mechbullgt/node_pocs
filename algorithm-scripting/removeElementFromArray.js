function dropElements(arr, func) {
    let dropFlag = false;
    let flagAray =[];
    for(let x in arr){
        let condi = passingFunction(arr[x],func);
        if(condi){
            flagAray.push(condi);
        }else {
            flagAray.push(condi);
        }
    }
    console.log(flagAray);
    let getFirstTruePosition = flagAray.indexOf(true);
    console.log('getFirstTruePosition :', getFirstTruePosition);
    if(getFirstTruePosition==-1){
    return arr.slice(arr.length);        
    }
    return arr.slice(getFirstTruePosition, arr.length);
};

  function passingFunction(item,func){
      console.log("In passing function");
      return func(item);
  }
  
// console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
// console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
//    console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}) ); //[1, 0, 1]
 console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) );
// console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}) );