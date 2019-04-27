var largerArr=[];
var smallerArr=[];
function diffArray(arr1, arr2) {
    var newArr = [];
    let sortedArr1 = arr1.sort((a,b)=>{
        return Number(a)-Number(b);
    });
    console.log('sortedArr1 :', sortedArr1);
    let sortedArr2 = arr2.sort((a,b)=>{
        return Number(a)-Number(b);
    })
    console.log('sortedArr2 :', sortedArr2);
    compareArrays (sortedArr1, sortedArr2);
    console.log('largerArr :', largerArr);
    console.log('smallerArr :', smallerArr);
    let flag = false;
    let diffEl;
    for(let x in largerArr){
        for(let u in smallerArr){
            if(largerArr[x]==smallerArr[u]){
                flag = false;
                break;
            } else {
                diffEl = largerArr[x];
                flag = true;
            }
        }
        if(flag==true){
            newArr.push(diffEl);
        }
    }
    console.log('newArr :', newArr);
    return newArr;
  }

  function compareArrays(a, b){
      if(a.length>b.length){
          largerArr=a.slice();
          smallerArr=b.slice();
      }
      largerArr=b.slice();
      smallerArr=a.slice();
  }
  
let sol = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log('sol :', sol);