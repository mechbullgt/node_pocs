function confirmEnding(str, target) {
    // hello -> str.substring(1,4) -> ell
    if(str.substring(str.length-target.length,str.length)==target){
        console.log(str.substring(str.length-target.length,str.length));
        return true;
    } else{
        console.log(str.substring(str.length-target.length,str.length));
        return false;
    }
  }
  
  confirmEnding("Bastian", "an");``