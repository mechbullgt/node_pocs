function checkMatch(){
    return "f".match(/[a-e]/g);
}

// console.log('checkMatch() :', checkMatch());

function checkForUnique(arr, x){
    console.log("Checking of unique.");
        console.log('arr :', arr.indexOf(x));
        if(arr.indexOf(x)==-1){
            console.log("Unique:",x);
            return 1;
        }
    console.log("Not unique:",x);
    return 0;
}

// console.log('checkForUnique([1,2],3) :', checkForUnique([1,2],3));

function noMoreSplitHair(str){
    let strArr = str.split('');
    console.log('strArr :', strArr);
    let x = strArr.join('');
    console.log('x :', x);
}

//noMoreSplitHair("Maqbool is now MaqBool Pro 2019");

function generateFibonacci(max){
    let fiboPrev = 0;
    let fiboCurrent = 1;
    let fiboNext=0;
    while(fiboNext<max){
        fiboNext=fiboPrev+fiboCurrent;
        console.log('fiboNext :', fiboNext);
        fiboPrev=fiboCurrent;
        fiboCurrent=fiboNext;
    }
}

// generateFibonacci();

function getPrimeNumbers(max){
    let primeArr =[];
    for(let x =0;x<=max;x++){
        if(checkPrime(x)){
            console.log("Got Prime",x);
            primeArr.push(x);
            console.log('primeArr :', primeArr);
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
                console.log("not prime:",x);
                return false;
            }
            sampleArr.push(y)
        }
        console.log('sampleArr :', sampleArr);
    }
    return true;
}

// console.log('getPrimeNumbers(10) :', getPrimeNumbers(10));
// checkPrime(11);

function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
}
// let output = gcd(1,5);
// console.log('output :', output);

function valueExtractor(arr){
    // return arr.filter((item)=>{
    //     return item>2;
    // })
    return typeof(arr[0][0][0][0][0]);
}

// console.log(valueExtractor([[[[["a"]]]]]));

function jcbExtractor(arr){
    let finalArr =[];
    let arrStr = arr.toString();
    console.log('arrStr :', arrStr);
    finalArr = arrStr.replace("");
    return finalArr;
}

 console.log(jcbExtractor([1, [2], [3, [[4]]]]));