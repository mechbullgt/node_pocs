function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var falsyArray =[false, null, 0, "", undefined,NaN];
    for (let x in arr){
        for (let y in falsyArray){
            if(arr[x]==falsyArray[y]){
                console.log('x :', arr[x]);
                arr.splice(x,1);
                    console.log('arr :', arr);
            } else if(arr[x]!=null&&isNaN(arr[x])&&!arr[x].length>0) {
                arr.splice(x,1);
                    console.log('arr :', arr);
            } else if(arr[x]!=null&&arr[x].length==0){
                arr.splice(x,1);
                console.log('arr :', arr);
            }
        }
    }
    console.log('arr :', arr);
    return arr;
  }
  
//  bouncer([7, "ate", "", false, 9]);
// bouncer([false, null, 0, NaN, undefined, ""])
//bouncer([7, "ate", "", false, 9])
bouncer([1, null, NaN, 2, undefined]);