//Synchronous Programming vs Asynchronous Programming
//--> JS is Synchronous Programmin language and it is single threaded


//Synchronous==> one running code will block other code after that from execution
console.log("script start"); //--> this will be printed

for(let i=1;i<500;i++){           //--> this loop will run 
    console.log("inside of loop");
}

// console.log("script end")   //--> this will only be printed when the loop got executed 500 times 
                            //which will take sometime




//Asynchronous Programming --> allows to run potentially long task without stopping and continues to execute the further task even if the long task is not completed.

console.log("script start");

setTimeout(()=>{
    console.log("inside script");
},1000);

console.log("script end");

/*Working
1-->  when Global execution context is created in Call-Stack where all the files are run
2--> JS compiler prints first console.log line  and then it goes to next line
and sees setTimeout fucntion(provided by browser)
4--> JS compiler see SetTimeout callback function knowing that is a browser function, so it gives it to browser ask to provide the function output back after the specified time(1000 mili-seconds == 1second)
5--> till then the JS compiler continues to execute the further code.      
6--> after the specified time the bowser send the output of call-back funtion to JS Call-stack, but before going to call-stack the output needs to go through callback-Queue (where it is check that either any fucntion is still working in call-Stack or not) if not the output will be send to call-back stack                   
*/

console.log("script start");

setTimeout(()=>{
    console.log("inside script");
},0);

for(let i=1;i<50;i++){
    console.log("something is running")
}

console.log("script end");

/*output of above code
--> script start will be printed
--> setTimeout function will go to browser 
--> for-loop will start executing 49-times  in callstack
--> the setTimeout function will give output verysoon as the time-limit is 0mili-second.
--> the setTime function will go to CallBack-Queue over there EventLoop will stop this function to go to call-Stack because for loop is still running
-->Script end will be printed as it was already there in call-Stack
--> When the For-loop will be completed the event loop will allow the output of SetTimeout callback function to go to CallBack stack to execute
*/



/*
SetInterval
--> Works same as SetTimeout 
*/

console.log("script start");

const intervalId  = setInterval(()=>{
    console.log(Math.random());
},500);
console.log("script end");