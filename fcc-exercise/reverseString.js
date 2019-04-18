function reverseString(str) {
    let l = str.length;
    let revString = '';
    for (x in str) {
        revString += str[l - 1];
        //   console.log(str[l-1]);
        l--;
    }
    return revString.toString();
}

console.log(reverseString("hello"));