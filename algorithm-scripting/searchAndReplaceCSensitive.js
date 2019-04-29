function myReplace(sentence, keyString, replaceString){
    let newSentence;
    newSentence = handleReplacement(sentence,keyString,replaceString);
    return newSentence;
}

function handleReplacement(sen,key,rep){
    let keyCharStatus = checkKeyCase(key);
    let newRep;
    if(keyCharStatus==1){
        console.log("key is in sentence case");
        newRep = changeRepToSentenceCase(rep);
        return sen.replace(key,newRep);
    } else{
        console.log("key in lowercase");
        return sen.replace(key, rep);
    }
}

function changeRepToSentenceCase(rep){
    let firstChar = rep.slice(0,1);
    console.log('firstChar :', firstChar);
    let rest = rep.slice(1,rep.length);
    console.log('rest :', rest);
    return (firstChar.toUpperCase()).concat(rest);
}

function checkKeyCase(key){
    let firstChar = key.slice(0,1);
    console.log('firstChar :', firstChar);
    if(firstChar===firstChar.toUpperCase()){
        return 1;
    }
    return 0;
}

console.log('myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") :', myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));