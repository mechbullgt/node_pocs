var htmlTablify = require('html-tablify');

function showTable(){
    var data = {
        "data": {
            "subHeading": "(Q1'20)",
            "value": "$0",
            "alertText": "",
            "showCard": false
        },
        "success": true,
        "respMsg": ""
    };
    var x=htmlTablify.tablify(data);
        console.log(x);
    return x;
}

showTable();