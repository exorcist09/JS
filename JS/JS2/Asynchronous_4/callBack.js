/*CallBack
--> mostly used in asynchoronus programming
*/



// using it for synchronous programming

function myfun(callback){
    console.log("Function 1");
    callback();
}

function myfun2(){
    console.log("fucntion 2");
}

myfun(myfun2);


//another example
function getNoandAdd(num1,num2, callback){
    console.log(num1,num2);
    callback(num1,num2); //need to enter the values you will use callback function for without them it wont work.
}

function addTwo(num1,num2){
    console.log(num1+num2);
    console.log('good')
}

getNoandAdd(4,5,addTwo);