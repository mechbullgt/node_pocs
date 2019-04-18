function findLongestWordLength(str) {
    let allStrings = str.split(" ");
    // console.log(allStrings);
    let longestWord ='';
    let longetWordSize ='';

    for (x in allStrings){
        if(allStrings[x].length>longestWord.length){
            longestWord=allStrings[x];
        }
    }
    console.log(longestWord);
    return longestWord.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");