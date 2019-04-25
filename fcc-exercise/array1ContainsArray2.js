function mutation(arr) {
    let el1=(arr[0].toLowerCase()).split('');
    let updateEl1= el1.filter(function(x,i,a){
        return a.indexOf(x)===i;
    });
    console.log('el1 :', el1);
    console.log('updateEl1 :', updateEl1);
    let el2=(arr[1].toLowerCase()).split('');
    console.log('el2 :', el2);
    return check(el2,updateEl1);
 }

function check(el2, updateEl1){
    let matchScore=0;
    for (let x in updateEl1){
        for (let y in el2){
            if(el2[y]==updateEl1[x]){
                console.log('el2[y] :', el2[y]);
                matchScore++;
            }
        }
    }
    if(matchScore>=el2.length){
        console.log('matchScore :', matchScore);
        return true;
    } else{
        console.log('matchScore :', matchScore);
        return false;
    }
}
  
//  mutation(["hello", "hey"]);
// mutation(["floor", "for"]);
// mutation(["Mary", "Army"]);
mutation(["voodoo", "no"]);