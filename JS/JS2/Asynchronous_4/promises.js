/* Promises  (earlier called future value)
--> the values which we dont know now but will get to know later 
--> the status of promise is either rejected  with value as"could'nt do it" or fulfilled  with value of "completed".
--> basically a object which stores status and its value. 

--> this is an asynchronous function
--> output of promises provided by the   broser don't get added to added to  callback queue but to { microtask queue}( which is lot similar to callBack queue)
*/

// const bucket = ["coffee", "chips", "vegetable", "salt", "rice", "masala"];

// creating a promise
// const friedRicePromise = new Promise((resolve, reject) => {
//     if (
//         bucket.includes("vegetable") &&
//         bucket.includes("salt") &&
//         bucket.includes("rice")
//     ) {
//         resolve("Fried Rice");
//     } else {
//         reject("couldn't do it "); //you can enter anything
//     }
// });

// //consuming a promise
// friedRicePromise.then((myfriedRice)=>{
//     console.log("lets eat", myfriedRice)
// }).catch((error)=>{console.log("error")})

// promise resolve ==  takes any vallue and return a promise which is resolve

// const myPromise=Promise.resolve(5);
// myPromise.resolve(5).then((value)=>{
//     console.log(value);
// });


//Promise Chaining
//then() method ==> always returns promise, this helps to create promise chain.

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("good");
  });
}

myPromise().then((value) => {
  console.log(value);
  value+="Bar";
  return value;   //looks like we are returning string but in reality we are returning promise
}).then((value)=>{
    console.log(value);
})
