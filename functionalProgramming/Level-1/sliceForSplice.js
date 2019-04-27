function nonMutatingSplice(cities) {
    // Add your code below this line
    let after = [];
    after = cities.slice(0,3)
    return after;
    // Add your code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  let after = nonMutatingSplice(inputCities);
  console.log('after :', after);