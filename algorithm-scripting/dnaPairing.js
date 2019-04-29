function dnaPairing(str){
    let theTwoDArray=[];
    let strArr = str.split("");
    for(let x in strArr){
        theTwoDArray.push(getPair(strArr[x]));
    }
    return theTwoDArray;
}

function getPair(x){
    let xCaps = x.toUpperCase();
    let retArr=[];
    switch(xCaps){
        case "C":
        console.log("xCaps:",xCaps);
        retArr.push(xCaps);
        retArr.push("G");
        break;
        case "G":
        console.log("xCaps:",xCaps);
        retArr.push(xCaps);
        retArr.push("C");
        break;
        case "A":
        console.log("xCaps:",xCaps);
        retArr.push(xCaps);
        retArr.push("T");
        break;
        case "T":
        console.log("xCaps:",xCaps);
        retArr.push(xCaps);
        retArr.push("A");
        break;
        default:
        console.log("Something went wrong, no case got selected, xCaps: ",xCaps);
    }
    return retArr;
}



console.log('dnaPairing("GCG") :', dnaPairing("GCG"));