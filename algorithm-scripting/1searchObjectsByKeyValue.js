function whatIsInAName(collection, source) {
    // What's in a name?
    // Only change code below this line
    return checkForSourceKeysInCollectionAndThenFilter(collection, source);
    // Only change coade above this line
  }
  
  function checkForSourceKeysInCollectionAndThenFilter(collection,source){
      let sourceKeys=Object.keys(source);
      return collection.filter((item)=>{
          for(let x=0;x<sourceKeys.length;x++){
              if(!item.hasOwnProperty(sourceKeys[x])|| item[sourceKeys[x]]!==source[sourceKeys[x]]){
                  return false;
              }
          }
          return true;
      });
  }

//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})