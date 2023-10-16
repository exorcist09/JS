console.log("script start");


const bucket = ["coffee", "chips", "vegetable", "salt", "rice", "masala"];

// creating a promise
const friedRicePromise = new Promise((resolve, reject) => {
    if (
        bucket.includes("vegetable") &&
        bucket.includes("salt") &&
        bucket.includes("rice")
    ) {
        resolve("Fried Rice");
    } else {
        reject("couldn't do it "); //you can enter anything
    }
});

//consuming a promise
friedRicePromise.then((myfriedRice)=>{
    console.log("lets eat", myfriedRice)
}).catch((error)=>{console.log("error")})

setTimeout(()=>{
    console.log("hello");
},0)

console.log("script end");


/*Working of the above code
1st --> script start will be printed
2nd --> bucked named array will be creasted
3rd --> a promise object will be created
4th --> the promise consumption will go to the browser for execution
5th --> the setTimeout will also go to Browser for execution
==> setTimout callBack function when completed will be added to CallBAck queue  but the promise will be added to microtask.
==> and microtask queue >>> CallBAck queue.
6th--> script end will be printed
7th -->  promise output will be printed
8th--> setTimout will be printed



$$ output will be like-->
Script start
script end
lets eat fried rice
hello

*/