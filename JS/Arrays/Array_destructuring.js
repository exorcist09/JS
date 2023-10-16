// breaking of array 

const myArr =["value1","value2","value3"];


// this this is don emostly like this in several languages
let myVar1 = myArr[0];
let myVar2 = myArr[1];
console.log(myVar1);

// but for JS we have something other know as ARRAY DESTRUCTURING

// let [firstVar, secondVar, thirdVar] = myArr ;
// console.log(thirdVar);
// for example you want to store value 2 in secondVar

let [firstVar,,secondVar] =myArr;
console.log(secondVar);