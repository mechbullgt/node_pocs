function chunkArrayInGroups(arr, size){
    let outputArr =[];
    while(arr.length>0){
        outputArr.push(arr.splice(0,size));
    }
    console.log('outputArr :', outputArr);
    return outputArr;
}

// function chunkArrayInGroups(arr, size) {
//     let masterArray= getMasterArray(arr,size);
//     createSubArray(arr,masterArray,size);
//     console.log('masterArray Final :', masterArray);
//     return masterArray;
//   };

// function createSubArray(arr,masterArray,size){
//     for(let x in arr){
//         console.log('arr[x] :', arr[x]);
//             for (let y=0; y<masterArray.length;y++){
//             console.log('y :', y);
//             for (let z=0; z<=y;z++){
//                 masterArray[y][z]=arr[x];
//                 console.log('masterArray[y][z] :', masterArray[y][z]);
//             }
//         }
//     }
//   }

//   function getMasterArray(arr,size){
//       let arrLen = arr.length;
//       let subArray=[];
//       let subArrayCount = arrLen/size;
//       let masterArray =[];
//       while(subArrayCount>0){
//           masterArray.push(subArray);
//           subArrayCount--;
//       }
//       console.log('masterArray :', masterArray);
//       return masterArray;
//   }
  
//  chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);