function smallestCommons(arr) {
    let range = getRange(arr[0],arr[1]);
    let sortedRange = range.sort((a,b)=>{return a-b});
    console.log('sortedRange :', sortedRange);

    // can use reduce() in place of this block
    var lcm = sortedRange[0];
    for (i = 1; i < sortedRange.length; i++) {
    var GCD = gcd(lcm, sortedRange[i]);
    lcm = (lcm * sortedRange[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

function getRange(x,y){
    let range=[];
    console.log('x :', x);
    console.log('y :', y);
  let start, end=0;  
  if(x<y){
        start = x;
        end=y;
    } else{
      start=y;
      end=x;
    };
    for(let i=start;i<=end;i++){
        range.push(i);
    }
    return range;
}  
// test here
console.log(smallestCommons([5,1]));