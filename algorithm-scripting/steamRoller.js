function steamrollArray(arr) {
    let strArr = arr.toString();
    console.log('strArr :', strArr);
    return finalRolling(strArr);
  }

  function finalRolling(str){
      let arr = str.split(",");
      for(let x in arr){
          console.log('typeof(arr[x]) :', typeof(arr[x]));
      }
  }
  
console.log(steamrollArray([1, [["a"]], [3, [[4]]]]));