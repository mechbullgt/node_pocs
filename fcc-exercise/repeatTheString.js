//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let retVar = '';
    // repeat after me
    if (num > 0) {
        while (num > 0) {
            retVar += str;
            num--;
        }
        console.log(retVar);
        return retVar;
    }
    return retVar;
}

repeatStringNumTimes("*", 3);