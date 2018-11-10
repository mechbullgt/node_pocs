const bcrypt = require('bcrypt');

const saltRounds = 10;
const userName = 'mechbullgt';
const userPassword = 'aT0Psecret';
const wrongUserPassword = 'aTOPsecret';
var encryptedPassword=[];

console.log('Welcome to bcrypt tutorial');

// Calling a async function
// checkUser(userName, userPassword).then(result=>{
//     console.log("Execution Sucess");
// }).catch(error=>{
//     console.log(error);
// });

// Calling a async function
checkUser(userName, wrongUserPassword).then(result=>{
    console.log("Execution Sucess");
}).catch(error=>{
    console.log(error);
});

async function checkUser(userName, userPassword) {
    console.log('Checking user in our DB!');
    console.log('User:' + userName + '|' + 'Password:' + userPassword);
    // var passwordFromDb = storeUserPassword(userPassword);
    // console.log('DBPassword:' + passwordFromDb);
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(userPassword, salt, function (err, hashedPassword) {
                //this.encryptedPassword=hashedPassword;
                console.log('H:'+hashedPassword);
                encryptedPassword.push(hashedPassword.toString);
        })
    })
    console.log("E:"+encryptedPassword.pop());
    await bcrypt.compare("aaa", encryptedPassword, function(err,result){
        console.log('Welcome Aboard:' + userName);
        console.log('Userpassword:' + 'Before:' + userPassword + '|' + 'Encrypted Password:' + encryptedPassword);
    });
}



// function storeUserPassword(userPassword) {
//     console.log('Storing User Password!');
//     bcrypt.genSalt(saltRounds, function (err, salt) {
//         bcrypt.hash(userPassword, salt, function (err, hashedPassword) {
//                 console.log('Normal Password:' + userPassword);
//                 console.log('Hashed Password:' + hashedPassword);
//                 encryptedPassword=hashedPassword;
//         })
//     })
//     return encryptedPassword;
// }
