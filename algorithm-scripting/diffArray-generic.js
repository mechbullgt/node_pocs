// var largerArr=[];
// var smallerArr=[];
function diffArray(arr1, arr2) {
    // compareArrays(arr1,arr2);
    var newArr1= searchInEachOther(arr1,arr2);
    var newArr2= searchInEachOther(arr2,arr1);
    return newArr1.concat(newArr2);
  }

  function searchInEachOther(largerArr,smallerArr){
      let newArr=[];
    for(let x in largerArr){
        if(smallerArr.includes(largerArr[x])){

        } else {
            newArr.push(largerArr[x]);
        }
    }
    console.log('newArr :', newArr);
    return newArr;
  }

//   function compareArrays(a,b){
//       if(a.length>b.length){
//           largerArr=a.slice();
//           smallerArr=b.slice();
//       }else{
//           largerArr=b.slice();
//           smallerArr=a.slice();
//       }
//   }
  
// let sol = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
let sol = diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
console.log('sol :', sol);