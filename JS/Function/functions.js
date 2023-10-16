//Programming has a principle of DRY(Don't Repeat yourself)
// Functions helps you in doing this, write a certain fucntion and call it again and againto execute it with different values


//declarating a function
function sing(){
    console.log("baby, dance with me...")
}

function add(num1,num2){
    return (num1+num2);
}

// calling a function--> this can be done many times in the code
sing();
console.log(add(5,6));


//function expression ==> Anonymous function == this function has no name but the name of variable becomes the name of function
//1st eg-->
const sumThreeNo =function(num1, num2, num3){
    return(num1+num2+num3);
}

console.log(sumThreeNo(3,4,5));


//2nd eg --
const evenOrOdd = function(num){
    return num%2==0;
}
console.log(evenOrOdd(9));