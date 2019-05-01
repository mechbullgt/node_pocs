function fearNotLetter(str) {
    let strArr = str.split("");
    let rangeStart = strArr.slice(0,1);
    console.log('rangeStart :', rangeStart);
    let rangeEnd = strArr.slice(str.length-1,str.length);
    console.log('rangeEnd :', rangeEnd);
    let regex = getCustomRegex(rangeStart,rangeEnd);
    let missingLetter = getMissingLetterFromRange(getRangeElements(rangeStart,rangeEnd),str);
    return missingLetter;
  }

  function getMissingLetterFromRange(range, str){
    let missingX;
    for (let x in range){
        if(str.includes(range[x])){
            console.log('str[x] :', range[x]);
        } else {
            missingX=range[x];
            console.log('missingX :', missingX);
            return missingX;
        }
    }
    return undefined;
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

  function getRangeElements(s,e){
      let sChar= s[0].charCodeAt(0);
      console.log('sChar :', sChar);
      let eChar = e[0].charCodeAt(0);
      console.log('eChar :', eChar);
      let rangeElements = [];
      for(let x = sChar;x<=eChar;x++){
          rangeElements.push(String.fromCharCode(x));
      }
      console.log('rangeElements :', rangeElements);
      return rangeElements;
  }

  function getCustomRegex(s,e){
      let baseRegex = "/"+"["+s+"-"+e+"]"+"/"+"g";
      let customRegex = new RegExp(`[${s}-${e}]`,'g');
      console.log('customRegex :', customRegex);
      console.log('baseRegex :', baseRegex);
      return customRegex;
  }
  
//  fearNotLetter("abce");
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));