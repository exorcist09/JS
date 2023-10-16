/*Arrays == used to store multiple values in single varible
--> in JavaSript arrays can Store  different types of  datatype while in Java it can 
only store similar datatypes.
-->length is predefined
--> ordered collection ==> it has index
--> to find the length of array use length variable
--> Are Mutable(can be changed)
*/

let cars =["g-wagon" ,"skoda" ,"beemer6"]

console.log(cars);

//Array indexing

// array= ["g-wagon" ,"skoda" ,"beemer6"]
//index = 0           , 1      , 2


//Array methods
let arr =[1,2,5.6,"good"];

//Updation
arr[2]=6;
console.log(arr);

//pop ==remove thse last element from the arry
arr.pop();
console.log(arr);

//push ==add something at last of array
arr.push("bad")
console.log(arr);

//shift== remove  first index of the array
arr.shift();
console.log(arr);

// unshift == adds element at first index of array

arr.unshift("mercedes");
console.log(arr);


//