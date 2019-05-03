function binaryAgent(str) {
    let strArr = str.split(' ');
    let ourStr = [];
    for (let x in strArr){
        let bin2Dec = parseInt(strArr[x],2);
        let dec2Char = String.fromCharCode(bin2Dec);
        ourStr.push(dec2Char);
    }
    console.log('ourStr :', ourStr);
    return ourStr.join('');
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");