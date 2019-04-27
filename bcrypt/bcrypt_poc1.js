const bcrypt = require('bcrypt');
const saltRounds = 10;

const myPassword = 'password123';
var newPassword='';

bcrypt.genSalt(saltRounds,function(err,salt){
    bcrypt.hash(myPassword,salt,function(err, hashedPassword){
        newPassword = hashedPassword;
        console.log('Normal Password:'+myPassword);
        console.log('Encrypted Password:'+newPassword);
    });
});

setTimeout(function(){
    bcrypt.compare(myPassword,newPassword, function(err, res){
        if(res==true){
            console.log("Welcome Aboard!"+newPassword);
        } else {
            console.log('Do we know you?'+'|'+myPassword+'|'+newPassword);
        }
    });
},2000);
