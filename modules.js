var fs = require('fs')
var os = require('os');
var user = os.userInfo();
console.log(user);
console.log(user.username);

// var fs = require('fs');
// fs.appendFile("tut.txt",'Hello friends ! welcome to this tuitorial',user.username , ()=>{
//     console.log('file is suceessfully creates');
// })
// var fs = require('fs');
fs.appendFile("tut.txt",'Hello friends ! welcome to this tuitorial' +user.username +'!\n' , ()=>{
    console.log('file is suceessfully creates');
})
console.log(os);
console.log(fs);
