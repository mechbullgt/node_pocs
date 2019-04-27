var pizza = ["slice1", "slice2","slice3","slice4","slice5","slice6"];

function getPizzaForGuests(partyPizza, sliceCount){
    let guestsServingTray =[];
    while(partyPizza.length>0){
        guestsServingTray.push(partyPizza.splice(0,sliceCount));
    }
return guestsServingTray;
}

let guestsTrayView = getPizzaForGuests(pizza,2);
console.log('guestsTrayView :', guestsTrayView);

var farewellPizza = ["slice1", "slice2","slice3","slice4","slice5","slice6"];

let guest1sSlice = farewellPizza.slice(0,2);
console.log('guest1sSlice :', guest1sSlice);