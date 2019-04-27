function Bird(){
    let birdsWeight = 10;

    this.getBirdsWeigth = function(){
        return birdsWeight;
    }
}

let duck = new Bird();
console.log('duck.birdsWeight :', duck.birdsWeight); // undefined
console.log('duck :', duck.getBirdsWeigth()); // 10