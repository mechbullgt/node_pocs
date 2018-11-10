const bcrypt= require('bcrypt');

const saltRounds =10;
const userName='mechbullgt';
const userPassword='aT0Psecret';
// var encryptedPassword='';

console.log('Welcome to bcrypt tutorial');
checkUser(userName,userPassword);

async function checkUser(userName, userPassword){
    console.log('Checking user in our DB!');
    console.log('User:'+userName+'|'+'Password:'+userPassword);
    var passwordFromDb= await storeUserPassword(userPassword).then(result=>result.data);
    console.log('DBPassword:'+passwordFromDb);
    await bcrypt.compare(userPassword,passwordFromDb, function(err,loginStatus){
        if(loginStatus){
            console.log('Welcome Aboard:'+userName);
            console.log('Userpassword:'+'Before:'+userPassword+'|'+'Encrypted Password:'+storeUserPassword(userPassword));
        } else {
            console.log('Do we know you, please check username or password!');
        }
    });
}

function storeUserPassword(userPassword){
    return new Promise ((resolve, reject)=>{
        console.log('Storing User Password!');
        bcrypt.genSalt(saltRounds,function(err, salt){
            bcrypt.hash(userPassword, salt, function(err, hashedPassword){
                if(err){
                    console.log(err); 
                } else {
                    console.log('Normal Password:'+userPassword);
                    console.log('Hashed Password:'+hashedPassword);    
                    resolve(hashedPassword);
                }
           })
        })
})
}
