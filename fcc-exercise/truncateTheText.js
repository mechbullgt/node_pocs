//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    let elp ='...';
    if(str.length>num){
        let newStr = str.substring(0,num);
        let truncated = newStr+elp;
        console.log(truncated);
        return truncated;
    } 
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);