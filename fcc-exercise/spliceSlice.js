"use strict"

function frankenSplice(arr1, arr2, n) {
    let newArr=[];
    for (let i in arr2){
        newArr[i]= arr2[i];
    }
    console.log(newArr);
    for (let u in arr1){
        newArr.splice(n,0, arr1[arr1.length-1-u]);
    }
    console.log(newArr);
    // var a = newArr.shift();
    // console.log('a :', a);
    // newArr.splice(arr1.length,0,a);
    // console.log('newArr :', newArr);
    return newArr;
  }
  
//  frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2], ["a", "b"], 1)