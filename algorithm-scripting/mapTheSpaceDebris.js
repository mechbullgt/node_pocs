function orbitalPeriod(arr) {
    let outputArr =[];
    for(let x in arr){
        let orbP = Math.round(getOrbitalPeriod(arr[x]['avgAlt']));
        let name = arr[x]['name'];
        let obj ={
            'name':name,
            'orbitalPeriod':orbP
        };
        outputArr.push(obj);
    }
    console.log('outPutArr :', outputArr);
    return outputArr;
  }

  function getOrbitalPeriod(alt){
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
      let pie = Math.PI;
      console.log('pie :', pie);
      let x = alt+earthRadius;
      let x3 = Math.pow(x,3);
      let xy = Math.sqrt(x3/GM);
      return xy*2*pie;
  }
  
//  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])