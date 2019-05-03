function truthCheck(collection, pre) {
    let faslyPool =[0, false, undefined, NaN,null,""];
    //loop over the collection
    //look for pre object.hasOwnProperty
    // if above fasle, return false,
    // esle get values for key "pre" and check if the values below to any of the faslypool
    // if yes return false
    // esle return true
    let passCount=0;
    console.log('pre :', pre);
    for (let x in collection){
        let obj = collection[x];
        if(obj.hasOwnProperty(pre)){
            console.log("Success");
            let getPreValue = obj[pre];
            console.log('getPreValue :', getPreValue);
            let preObjStatus;
            if(!isNaN(getPreValue)&&getPreValue!=true){
                preObjStatus= faslyPool.includes(parseInt(getPreValue))?false:true;
            } else {
                console.log("Value String check");
                preObjStatus = faslyPool.includes(getPreValue)?false:true;
            }
            console.log('preObjStatus :', preObjStatus);
            if(preObjStatus){
                passCount+=1;
                console.log('passCount :', passCount);
            } else {
                return false;
            }
        } else {
            console.log("Fail");
            console.log('obj :', obj);
            return false;
        }
    }
    if(passCount==collection.length){
        return true;
    }
    return pre;
  }
  
//   let t1 = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
//   console.log('t1 :', t1);
// let t2=truthCheck([{"single": "yes"}], "single");
// console.log('t2 :', t2);
// let t3 = truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
// console.log('t3 :', t3);

let t4= truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");
console.log('t4 :', t4);