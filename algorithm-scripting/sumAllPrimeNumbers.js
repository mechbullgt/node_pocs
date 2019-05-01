function sumPrimes(num) {
    let resArr=getPrimeNumbers(num);
    console.log('resArr :', resArr);
    return resArr.reduce((a,b)=>{return a+b});
  }
  
  function getPrimeNumbers(max){
    let primeArr =[];
    for(let x =0;x<=max;x++){
        if(checkPrime(x)){
            primeArr.push(x);
        }
    }
    return primeArr;
}

function checkPrime(x){
    let sampleArr=[];
    if(x==1||x==0){
        return false; 
    } else if(x==2){
        return true;
    } else if(x>0 && x>2){
        for(let y=2;y<x;y++){
            if(x%y==0){
                return false;
            }
            sampleArr.push(y)
        }
    }
    return true;
}

console.log(sumPrimes(10));