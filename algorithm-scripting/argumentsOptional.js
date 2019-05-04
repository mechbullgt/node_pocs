function addTogether() {
    let sum;
    let a = arguments[0];
    let b;
    let num1Status;
    let num2Status;
    //check for args is no args return false
    //check number of args
    if (arguments.length > 1) {
        a = arguments[0];
        b = arguments[1];
        console.log('a :', a);
        console.log('b :', b);
        num1Status = checkNumStatus(a);
        num2Status = checkNumStatus(b);
        //if 2 args return the sum
        // if 1 arg ask for another arg
        // if arg not a number return undefined

        if (num1Status == undefined || num2Status == undefined) {
            console.log("Args not numbers");
            return undefined;
        } else {
            console.log("Args are numbers: ", a, b);
            sum = a + b;
        }
    } else if (arguments.length == 1) {
        if(checkNumStatus(a)==undefined){
            return undefined;
        }
        // if only 1 arg then
        return function (arg2) {
            num1Status = checkNumStatus(a);
            num2Status = checkNumStatus(arg2);
            if (num1Status == undefined || num2Status == undefined) {
                return undefined;
            } else {
                return a + arg2;
            }
        }
    }
    return sum;
}

//check each arg must be a number
function checkNumStatus(x) {
    let numStatus;
    console.log('x :', x);
    // if not number return undefined
    if (typeof x != 'number') {
        console.log('Not number :', x);
        numStatus = undefined;
        return numStatus;
    }
    console.log("Input is number: ", x);
    numStatus = true;
    return numStatus;
}

//let test = addTogether(2)(3);
// console.log('test :', test);

let test2 = addTogether("http://bit.ly/IqT6zt");
console.log('test2 :', test2);

// function addTogether(...args) {
//     let argsArr = [...args];
//     let result;
//     // Check if array is Number
//     let arrayCheck = sanityCheckArray(argsArr);
//     if(!arrayCheck){
//         console.log("Sanity Check for number failed");
//         return undefined;
//     }
//     let arrayCheck2 = args.length==1?false:true;
//     if(arrayCheck2){
//         result=argsArr.reduce((a,b)=>a+b);
//         console.log('result :', result);    
//     } else {
//         return (...args)=>{
//             argsArr[0];
//     }
// }
//     return result;
//   }

//   function sanityCheckArray(arr){
//       for (let x in arr){
//           if(isNaN(arr[x])){
//               return false;
//           }
//       }
//       return true;
//   }

// let t1= addTogether(2)(3);
// console.log('t1 :', t1);