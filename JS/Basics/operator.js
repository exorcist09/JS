// boolean         and     comparison operators
//  true ,false             >. <. =


let num1 =5;
let num2 ="5";
console.log(num1>num2);


// =  vs == vs ===

// = used for assiging values of one to other
// == check whether two things are equal or not, will give true/false even if the datatypes are differet
// === checks eqaulity as well as datatype

console.log(num1==num2);
console.log(num1===num2);


//"  != vs !== 
//   this != check only the values while !== also checks for datatype

let num3= 7;
let num4 ="7";

console.log(num3 !== num4);


//Ternary operator ?(alse works as if) :(also works as else)

let age =4;
let drink =age >= 18 ? "Rum" : "Milk";
console.log(drink);


/* && and || operator 
&& --> only if both the condition are true
||--> executes even if only on condition in true
*/
let height = 5.8;
let surName ="verma";

if(surName[0]=="V" && height>=5.8){
    console.log("you are cool");

}else{
    console.log("you are not");
}

if(surName[2]=="r" || height >= 6){
    console.log("you are cool");
}else{
    console.log("you are not");
}