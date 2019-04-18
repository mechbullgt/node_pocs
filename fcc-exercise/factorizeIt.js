function factorialize(num) {
    let factOutput = 1;
    while(num>0){
        factOutput *=num;
        num--;
    }
    return factOutput;
  }
  
console.log(factorialize(5));