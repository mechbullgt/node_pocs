// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add(bookList, bookName) {
    let newBookList = [...bookList];
    newBookList.push(bookName);
    return newBookList;
    // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(bookList, bookName) {
    let newBookList = [...bookList];
    console.log('newBookList :', newBookList);
    if (newBookList.indexOf(bookName) >= 0) {
        let removeBookIndex = newBookList.indexOf(bookName);
        console.log("Index of book to be removed:", removeBookIndex);
        let removedBook = newBookList.splice(removeBookIndex, 1);
        console.log('removedBook :', removedBook);
        console.log("After book removal:", newBookList);
        return newBookList;
        // Add your code above this line
    }
}

// var newBookList = add(bookList, 'A Brief History of Time');
// console.log('newBookList :', newBookList);
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log('newerBookList :', newerBookList);
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
// console.log('newestBookList :', newestBookList);

// console.log('bookList',bookList);