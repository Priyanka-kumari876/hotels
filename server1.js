// // adding files
// const tut1 = require('./tut1.js');
// console.log('server files are here');

// // coping variable
// var age = tut1.age;
// console.log(age);
// var result = tut1.addnumber(age+13,10);
// console.log('result is ' +result);

var  _= require('lodash');
var data = ["person",'person', 1,2,4,5,2,1 ,'name ','age','2'];
var filter = _.uniq(data);
console.log(filter);

console.log(_.isString('priyanka'))
console.log(_.isString(3))
// is it string or not  `