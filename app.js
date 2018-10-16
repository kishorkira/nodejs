console.log('app starting.');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();
console.log(user);

// let greeting = '\nhello kishorkira';
fs.appendFile('greeting.txt',`\nhello ${user.username}!`,err=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('success');
    }

});

