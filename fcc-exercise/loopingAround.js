//Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// change code below this line
let delThese = ['oranges', 'plums', 'strawberries'];
let foodKeys = Object.keys(foods);
// console.log(Object.keys(foods));
for (var item in foodKeys) {
    console.log("Item:", foodKeys[item]);
    for (var x of delThese) {
        console.log('X:', x);
        if (foodKeys[item] == x) {
            console.log('Deleting', x);
            delete foods[x];
        } else {
            console.log('x:'+x+'|'+'item:'+item);
        }
    }
}
// change code above this line

console.log(foods);