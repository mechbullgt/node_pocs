function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    let regex = /[\s|_]/g;
    let strArr = str.replace(/([a-z])([A-Z])/g,'$1 $2');
    console.log('strArr :', strArr);
    let finalStr = strArr.toLowerCase().replace(regex,"-");
    console.log('finalStr :', finalStr);
    return finalStr;
  }
  
//  spinalCase('This Is Spinal Tap');
  spinalCase('thisIsSpinalTap');