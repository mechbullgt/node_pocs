function sumFibs(num) {
    let fiboArray = generateFibonacci(num);
    let fiboFiltered = fiboArray.filter((item)=>{return item<=num});
    console.log('fiboFiltered :', fiboFiltered);
    let filterFiboOdd = fiboFiltered.filter((item)=>{return item%2!=0});
    console.log('filterFiboOdd :', filterFiboOdd);
    return filterFiboOdd.reduce((a,b)=>{return a+b});
  }
  
  function generateFibonacci(max){
      let fiboArray=[1];
    let fiboPrev = 0;
    let fiboCurrent = 1;
    let fiboNext=0;
    while(fiboNext<max){
        fiboNext=fiboPrev+fiboCurrent;
        console.log('fiboNext :', fiboNext);
        fiboArray.push(fiboNext);
        fiboPrev=fiboCurrent;
        fiboCurrent=fiboNext;
    }
    return fiboArray;
}


console.log('sumFibs(4) :', sumFibs(1));