function fearNotLetter(str) {
    let strArr = str.split("");
    let rangeStart = strArr.slice(0,1);
    console.log('rangeStart :', rangeStart);
    let rangeEnd = strArr.slice(str.length-1,str.length);
    console.log('rangeEnd :', rangeEnd);
    let regex = getCustomRegex(rangeStart,rangeEnd);
    let missingLetter = getMissingLetter(str,regex);
    return missingLetter;
  }

  function getMissingLetter(str, regex){
      let missingX;
      for (let x in str){
          console.log('str[x] :', str[x]);
          console.log('str[x].match(regex) :', str[x].match(regex));
          if(str[x].match(regex)!==null){
              console.log('str[x] :', str[x]);
          } else{
              missingX = str[x];
              console.log('missingX :', missingX);
              return missingX;
          }
      }
      return undefined;
  }

  function getCustomRegex(s,e){
      let baseRegex = "/"+"["+s+"-"+e+"]"+"/"+"g";
      let 
      let customRegex = new RegExp([s-e]);
      console.log('customRegex :', customRegex);
      console.log('baseRegex :', baseRegex);
      return baseRegex;
  }
  
  fearNotLetter("abce");