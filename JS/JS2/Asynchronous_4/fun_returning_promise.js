//Function returning promise


function ricePromise(){
    const bucket = ["coffee", "chips", "vegetable", "salt", "rice", "masala"];
    return new Promise((resolve, reject) => {
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
}

ricePromise().then((myfriedRice)=>{
    console.log("lets eat", myfriedRice)
}).catch((error)=>{console.log("error")})
