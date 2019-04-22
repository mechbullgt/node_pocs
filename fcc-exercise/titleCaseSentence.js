function titleCase(str) {
    let newStr = '';
    let wordsPool = str.split(' ');
    for(let i in wordsPool){
      let word = wordsPool[i];
      let firstLetter = word.substring(0,1);
      let remainingWord = word.substring(1, word.length);
      if(!checkIfFirstLetterIsCapital(firstLetter)){
        let capitalized = firstLetter.toUpperCase();
        newStr+= capitalized+remainingWord.toLowerCase()+" ";
      } else{
        newStr+= firstLetter+remainingWord.toLowerCase()+" ";
      }
    }
    console.log(newStr);
    console.log(newStr.substring(0,newStr.length-1))
    return newStr.substring(0,newStr.length-1);
  }
  
  function checkIfFirstLetterIsCapital(firstLetter){
    if(firstLetter===firstLetter.toUpperCase()){
    return true;
    }
    return false;
  }

  titleCase("sHoRt AnD sToUt");
  titleCase("I'm a little tea pot")
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") 
