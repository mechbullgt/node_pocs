let getTea = (numOfCups)=>{
    let teaTray =[];
    let teaCup = teaPot();
    for (let x=1;x<=numOfCups;x++){
        teaTray.push(teaCup);
    }
    return teaTray;
}

// let teaPot = ()=>{return 'ginger tea'}; //Correct
let teaPot = ()=>'ginger tea';

let getTea4TeamOf40 = getTea(40);
console.log('getTea4TeamOf40() :', getTea4TeamOf40);
