const jsonString = '{"name" : "priyanka" , "age" : 18 , "city" : "aurangabad"}';
const jsonObject = JSON.parse(jsonString);
// converting to object
console.log(jsonObject);
console.log("json object is created");

const objestToconvert = {
    name : 'priyanka',
    age : "18",
    city : 'Aurangabad',
};

const json = JSON.stringify(objestToconvert);
// converting to string
console.log(json);
console.log(typeof json);
