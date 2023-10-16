/* arrow functions --> these are the call back functions
--> used majorly in frameworks 

*/


//arrow function declaration
//1st eg- when you have no parameter
const myArr = ()=>{
    console.log("hey baby");

}
myArr();

//2nd eg- when you have two or more parameters

const sumTwo =((num1,num2)=>{
    return num1+num2;
});

console.log(sumTwo(4,5));

// 3rd eg- when you only have one parameter

const isEven = num => num%2 ==0;
console.log(isEven(5));