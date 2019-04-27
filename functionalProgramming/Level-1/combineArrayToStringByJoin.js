function sentensify(str) {
    // Add your code below this line
    let splitted = str.split(/[-]/);
    let joined = splitted.join(" ");
    return joined;
    // Add your code above this line
  }

let after = sentensify("May-the-force-be-with-you");
console.log('after :', after);