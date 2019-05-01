function uniteUnique(...arg) {
    let arr=[...arg];
    console.log('arr :', arr);
    let retArr=[];
    for(let x in arr){
        console.log('1st arr[x] :', arr[x]);
        for(let y in arr[x]){
            console.log('2nd arr[x][y] :', arr[x][y]);
            let status = checkForUnique(retArr,arr[x][y]);
            if(status==1){
                console.log('Before retArr :', retArr);
                retArr.push(arr[x][y]);
                console.log('After retArr :', retArr);
            }
        }
    }
    console.log("Final Arr:",retArr);
    return retArr;
  }
  
  function checkForUnique(arr, x){
    console.log("Checking of unique.");
        console.lsog('arr :', arr.indexOf(x));
        if(arr.indexOf(x)==-1){
            console.log("Unique:",x);
            return 1;
        }
    console.log("Not unique:",x);
    return 0;
}

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
//  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
uniteUnique([1, 3, 2], [1, [5]], [2, [4]])