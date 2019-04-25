function getIndexToIns(arr, num) {
    let sortedArr = sortIt(arr);
    if(arr.length>0){
        for(let x in sortedArr){
            let y = Number(x)+1;
            let current = sortedArr[x];
            console.log('current :', current);
            let next = sortedArr[y];
            console.log('next :', next);
            if(num>current){
                if(num<next){
                    console.log('x+1 :', Number(x)+1);
                    return Number(x)+1;    
                } else if(next==undefined){
                    console.log('x+1 :', Number(x)+1);
                    return Number(x)+1;    
                }
            } else if(num==current){
                console.log('x num==current :', x);
                return Number(x);
            } else if(num==next){
                return Number(y);
            }
        }
    } else{
        return 0;
    }

  }

  function sortIt(arr){
      console.log('arr :', arr);
      let sortedArray=arr.sort(compareNumbers);
      console.log('sortedArray :', sortedArray);
      return sortedArray;
  };

  function compareNumbers(a,b){
      return a-b;
  }

  
//  getIndexToIns([40, 60], 50);
// getIndexToIns([10, 20, 30, 40, 50], 35);
// getIndexToIns([3, 10, 5], 3);
// getIndexToIns([2, 5, 10], 15);
// console.log('getIndexToIns([5, 3, 20, 3], 5) :', getIndexToIns([5, 3, 20, 3], 5));
// console.log('getIndexToIns([10, 20, 30, 40, 50], 30) :', getIndexToIns([10, 20, 30, 40, 50], 30));
// console.log('getIndexToIns([], 1) :', getIndexToIns([], 1));
console.log('getIndexToIns([5, 3, 20, 3], 5) :', getIndexToIns([5, 3, 20, 3], 5));