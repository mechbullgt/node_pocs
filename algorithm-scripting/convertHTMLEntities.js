function convertHTML(str) {
    let strArr = str.split(" ");
    console.log('strArr :', strArr);
    let newStr = processForHTMLEntities(strArr);
    console.log('Final newStr :', newStr);
    return newStr;
  }

  function processForHTMLEntities(arr){
      let newArr=[];
      for(let y in arr){
          let charsArr = arr[y].split("");
          console.log('charsArr :', charsArr);
          for(let x in charsArr){
              console.log('charsArr[x] :', charsArr[x]);
            switch(charsArr[x]){
                case "&":
                charsArr[x]="&amp;";
                break;
                case "<":
                charsArr[x]="&lt;";
                break;
                case ">":
                charsArr[x]="&gt;";
                break;
                case "'":
                charsArr[x]="&apos;";
                break;
                case '"':
                charsArr[x]='&quot;';
                break;
                default:
                console.log("Found no match");
            }  
          }
          let words = charsArr.join('');
          console.log("x",words);
          newArr.push(words);
      }
      console.log('newArr :', newArr);
      let sent;
      sent = newArr.join(' ');
      return sent;
  }
  
//  convertHTML("Dolce & Gabbana");
convertHTML('Stuff in "quotation marks"')
// convertHTML("Schindler's List");
// convertHTML("<>");