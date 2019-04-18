//We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the users object and return the number of users whose online property is set to true.

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function countOnline(obj) {
    // change code below this line
    var trueCount = 0;
    let allKeys = Object.keys(obj);
    for (let x in allKeys){
        if(obj[allKeys[x]]['online']==true){
            trueCount +=1;
        }
    }
    return trueCount;
    // change code above this line
  }
  
  console.log(countOnline(users));