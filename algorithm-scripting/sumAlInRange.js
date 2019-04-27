function sumAll(arr) {
    let sortedArr = arr.sort((a,b)=>{
        return Number(a)-Number(b);
    });
    console.log('sortedArr :', sortedArr);
    let sum=0;
    for(let x=arr[0];x<=arr[1];x++){
        sum+=x;
    }
    return sum;
  }
  
let sol =  sumAll([5, 10]);
console.log('sol :', sol);