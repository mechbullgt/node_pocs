//Basic Algorithm Scripting: Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let largestArray=[];
    for (let x in arr){
        // console.log(arr[x]);
        for(let y in arr[x]){
            // console.log(arr[x][y]);
            if(arr[x][y]>largest){
                largest=arr[x][y];
                // console.log('Largest:',largest);
            }
        }
        largestArray.push(largest);
        largest =Number.NEGATIVE_INFINITY;
    }
    // console.log('Largest',largest);
    console.log('LarArray',largestArray);
    return largestArray;
  }
  
  var tests =['largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])','largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])','largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])','largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])'];
  for(let x in tests){
//    console.log(tests);
    // console.log(tests[x]);
  }
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
