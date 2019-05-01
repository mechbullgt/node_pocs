function smallestCommons(arr) {
    let range = getRange(arr[0],arr[1]);
    let sortedRange = range.sort((a,b)=>{return a-b});
    console.log('sortedRange :', sortedRange);
    let commons = getSmallestCommonsForRange(sortedRange);
    console.log('commons :', commons);
    let commons2 = getSmallestCommonsForLevels(commons);
    // while(commons.length!=1){
    //     commons=getSmallestCommonsForRange(commons);
    //     console.log('commonsLoop :', commons);
    // }
    console.log('commons2 :', commons2);
    return arr;
  }

  function getSmallestCommonsForLevels(levelgcd){
    let commons =[];
    let current, next;
    let lengthC = levelgcd.length;
    let y=0;
    for(let x=y;x<lengthC;x++){
        if(x+1<lengthC){
            current=levelgcd[x];
            next=levelgcd[x+1];
            commons=greatestCommonDivisor(current, next);
        }
    }
    console.log('commons :', commons);
    return commons;
  }

  function getSmallestCommonsForRange(sortedRange){
    let commons =[];
    let small = sortedRange[0];
    let large = sortedRange[sortedRange.length-1];
    console.log('rangeMin :', small);
    console.log('rangeMax :', large);
    for(let x=small;x<large;x++){
        console.log('x :', x);
        let gcd = greatestCommonDivisor(x,x+1);
        commons.push(gcd);
    }
    return commons;
  }
  
  function greatestCommonDivisor(a,b){
      let small = a>b ? b:a;
      console.log('small :', small);
      let large = a>b?a:b;
      console.log('large :', large);
      let gcd;
      let i=1;
      while(true){
          console.log("while rules");
        let multiple = small*i;
        if(multiple%large==0){
            gcd=multiple;
            console.log('gcd :', gcd);
            return gcd;
        }
        console.log('multiple :', multiple);
        i++;
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

// smallestCommons([2,10]);
 greatestCommonDivisor(15,20);
