// var fs = require('fs');
// fs.appendFile('prac.txt' , 'this is a file created ' ,()=>{
//     console.log('file is successfully created');
// })
//  fs.appendFileSync('prac.txt', ' this is the new line added to this file ',()=>{
//     console.log('changes are suceesfull done');
//  })

  const prac2= require('./prac1.js');
console.log('importing file');

var age = prac2.age;
console.log(age);
var multiple = prac2.multiply(3 , 4);
console.log("multiple is ", +multiple);
// console.log(multipl);