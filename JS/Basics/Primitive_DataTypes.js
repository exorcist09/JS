/*
Datatypes which are predefined are called Primitive Datatype.
-->string ="good"
-->number =2,3,4 -->lets you to store integer upto 9007199254740991 length
-->boolean =true ,false
-->undefined
-->null
-->BigInt
-->Symbol
*/


let firstName ="adarsh"
let age =30;


//typeof operator ==> tell which datatype is used
console.log(typeof age);

//converting number  to string
console.log(typeof (age+""));
//--or-- 
age =String(age);
console.log(typeof age);


//converting string to number
console.log(typeof(+firstName));


//undefined datatype
let goodName;
console.log(typeof goodName); 
//--> this can be done in let and var but cannnot be done with const 


//null datatype --> return object (a bug in JS)
let myVar =null;
console.log(typeof myVar);


//BigInt datatype --> lets you store number above 9007199254740991 length
let age1=33n;
console.log(typeof age1);


