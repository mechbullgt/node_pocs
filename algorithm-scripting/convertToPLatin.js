"use strict"

function translatePigLatin(str) {
    let strChars = str.split('');
    console.log('strChars :', strChars);
    let vowelsPool = /[aeiou]/;
    let consonantsPool = /[b-df-hj-np-tv-z]/g;
    let vOrCStatus;
    let backlog="";
    let nextCons;
    for(let x=0;x<strChars.length;x++){
        vOrCStatus = checkVorC(strChars[x],vowelsPool,consonantsPool);
        console.log('vOrCStatus :', vOrCStatus);
        if(vOrCStatus==0 && x==0){
            console.log("Found vowel");
            let a = strChars[x];
            console.log('a :', a);
            let ret2 =strChars.join("");
            return ret2.concat('way');
        } else {
            console.log("Consonants");
            let a = strChars[x];
            console.log('a :', a);
            nextCons = checkVorC2(a,vowelsPool,consonantsPool);
            console.log('nextCons2 :', nextCons);
            if(nextCons==1 && backlog.length<strChars.length){
                console.log('backlog.length :', backlog.length);
                backlog+=a;
                console.log('backlog :', backlog);
            } else if(nextCons==0){
                console.log("No more next consos");
                let strChar2 = strChars.slice(x,strChars.length);
                console.log(strChar2);
                let ret = strChar2.concat(backlog);
                console.log('ret :', ret);
                let ret2 =ret.join("");
                return ret2.concat('ay');    
            }
        }
    }
    console.log("No return till now, handle corner case for no vowels");
    return handleCornerCase(backlog, str);
  }

  function handleCornerCase(b,s){
      if(b.length==s.length){
          return b.concat('ay');
      }
  }

  function checkVorC2(x, vp, cp){
    console.log('2 Checking V or C');
    if(x.match(vp)!==null){
        console.log("Success Vowel:",x);
        return 0;
    }
    return 1;
}

  function checkVorC(x, vp, cp){
      console.log('Checking V or C');
      if(x.match(vp)!==null){
        console.log("Success Vowel");
          return 0;
      }
      return 1;
  }

// console.log(translatePigLatin("eight"));
console.log(translatePigLatin("glvx"));