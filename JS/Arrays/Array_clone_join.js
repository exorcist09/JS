//Clone of array

// let arr1 =["good" ,"bad", "sad", "anger"];
// let arr2 = arr1;
// console.log(arr2);

/* --> if you push on element in arr1 
then it will not be added in arr2
--> changes mad ein one array will not 
be reflected in other array
*/




// --Other ways to clone 

// 1method --> Slice method  (Fastest)
let arr1 =["item1" ,"item2", "item3"];
let arr2 =arr1.slice(0,);
console.log(arr2);

//2nd method --> concatenation
// --> adding arr1(whose clone you want) to and empty array.
let arr3 =[].concat(arr1);
console.log(arr3);

//3rd way -->spread Operator  (Easiest/Mostly used in ReactJs)
// use of three dot means add the elements of the array to this array 
let arr4 =[...arr1]
console.log( arr4);


//Joinng to arrays

//1st method --> concatination
let arr5 =[].concat(arr1,arr2);
console.log(arr5);

//2nd method -->slice
let arr6 =[...arr1,"item4","item5"];
console.log(arr6);