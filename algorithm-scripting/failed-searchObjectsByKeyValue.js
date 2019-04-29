function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    for (let x=0;x<collection.length;x++){
            if(checkCollectionElementInSourceKeys(collection[x],source)==source.length){
                arr.push(collection[x]);
            }
        }
    console.log('arr :', arr);
    // Only change coade above this line
    return arr;
  }
  

  function checkCollectionElementInSourceKeys(obj,source){
    let sourceKeys = Object.keys(source);
    console.log('sourceKeys :', sourceKeys);
    let check1 = checkIfObjectContainsBothKeys(obj, sourceKeys);
    let flagCount = 0;
    if(check1){
        for (let i=0; i<sourceKeys.length;i++){
            let a = sourceKeys[i];
            console.log('a :', a);
            let b = source[a];
            console.log('b :', b);
            let c = obj[a];
            console.log('c :', c);
            if(c==b){
                console.log('Success');
                flagCount +=1;
                console.log('flagCount :', flagCount);
            }    
    }
    }
    return flagCount;
  }

  function checkIfObjectContainsBothKeys(obj, sourceKeys){
      let objKeys= Object.keys(obj);
      if(objKeys>=sourceKeys){
        let found = sourceKeys.every((x)=>objKeys.includes(x));
        console.log('found :', found);
        return found;
      } else {
          return false;
      }
  }

//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})