//We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Maq: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    // change code below this line
    let getAllKeys = ['Alan','Jeff','Sarah','Ryan'];
    // let getAllKeys = Object.keys(obj);
    var z=0;
    for (x in getAllKeys){
        if(obj.hasOwnProperty(getAllKeys[x])){
         z+=1;
        }
    }
    if(z==4){
        return true;
    } else {
        return false;
    }
    // change code above this line
}

console.log(isEveryoneHere(users));