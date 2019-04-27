// Split about punctuations
function splitify(str) {
    // Add your code below this line
    return str.split(/[' ',-.]/)
    // Add your code above this line
  }
  let after= splitify("Hello World,I-am code");
  console.log(after);