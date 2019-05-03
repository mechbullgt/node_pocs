function steamrollArray(arr) {
    let strArr = arr.toString();
    console.log('strArr :', strArr);
    return finalRolling(strArr);
  }

  function finalRolling(str){
      let finalStr = [];
      let arr = str.replace(",,",",").split(",");
      for(let x in arr){
          if(arr[x]=='[object Object]'){
            //   console.log('typeof(arr[x]) :', typeof(arr[x]));
              finalStr.push({});
          } else if(isNaN(arr[x])){
              finalStr.push(arr[x]);
          } else {
              finalStr.push(parseInt(arr[x]));
          }
      }
      return finalStr;
  }
  
// console.log(steamrollArray([1,{}, [["a"]], [3, [[4]]]]));
// console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));